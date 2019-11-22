import { call, all, put, take, fork, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './posts.types'
import { docsToMap } from '../utils';
import { postsRequestSuccess, postsRequestFailure, postFilterBySubReaditRequestSuccess, postFilterBySubReaditRequestFailure, postsCancelledRequest } from './posts.actions';

function* postsRequestSagaAsync(parameter) {
  const channel = yield call(rsf.firestore.channel,
    firestore.collection('posts').orderBy('created_at', 'desc'));

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const allPosts = docsToMap(docs);
      yield put(postsRequestSuccess(allPosts, 'Fetched success'));
    }
  } catch (error) {
    yield put(postsRequestFailure(error.message));
  } finally {
    if (yield cancelled()) {
      yield put(postsCancelledRequest())
    }
  }
}

function* postsRequestSaga() {
  while (true) {
    const { payload: { parameter } } = yield take(actionTypes.POSTS_REQUEST)
    const sync = yield fork(postsRequestSagaAsync, parameter);
    yield take(actionTypes.POSTS_CANCEL_REQUEST);
    yield cancel(sync);
  }

}

function* postFilterBySubReaditRequestSagaAsync(subReadit) {
  const channel = yield call(rsf.firestore.channel,
    firestore.collection(`posts`)
      .where('subReadit', "==", subReadit)
      .orderBy('created_at', 'desc')
  );

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const posts = docsToMap(docs);
      yield put(postFilterBySubReaditRequestSuccess(posts, 'Fetched success'));
    }
  } catch (error) {
    yield put(postFilterBySubReaditRequestFailure(error.message));
  } finally {
    if (yield cancelled()) {
      yield put(postsCancelledRequest())
    }
  }
}

function* postFilterBySubReaditRequestSaga() {
  while(true) {
    const { payload: { subReadit } } = yield take(actionTypes.POST_FILTER_BY_SUBREADIT_REQUEST);
    const sync = yield fork(postFilterBySubReaditRequestSagaAsync, subReadit);
    yield take(actionTypes.POSTS_CANCEL_REQUEST);
    yield cancel(sync);
  }
}

export function* postsSaga() {
  yield all([
    call(postsRequestSaga),
    call(postFilterBySubReaditRequestSaga)
  ])
}
