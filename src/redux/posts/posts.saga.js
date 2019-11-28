import { call, all, put, take, fork, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './posts.types'
import { docsToMap } from '../utils';
import { postsRequestSuccess, postsRequestFailure, postsFilterBySubReaditRequestSuccess, postsFilterBySubReaditRequestFailure, postsCancelledRequest } from './posts.actions';
import { addCommentsLengthProps } from './posts.utils';

function* postsRequestSagaAsync(parameter) {
  console.log(parameter);
  let channel;
  switch (parameter) {
    case 'popular':
    case undefined:
      channel = yield call(rsf.firestore.channel,
        firestore.collection('posts').orderBy('votes', 'desc'));
      break;
    case 'all':
      channel = yield call(rsf.firestore.channel,
        firestore.collection('posts').orderBy('created_at', 'desc'));
      break;
    default: throw Error('Not found');
  }

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const posts = docsToMap(docs);
      
      const updatedPosts = addCommentsLengthProps(posts)

      yield put(postsRequestSuccess(updatedPosts, 'Fetched success'));
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

function* postsFilterBySubReaditRequestSagaAsync(subReadit) {
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
      yield put(postsFilterBySubReaditRequestSuccess(posts, 'Fetched success'));
    }
  } catch (error) {
    yield put(postsFilterBySubReaditRequestFailure(error.message));
  } finally {
    if (yield cancelled()) {
      yield put(postsCancelledRequest())
    }
  }
}

function* postsFilterBySubReaditRequestSaga() {
  while (true) {
    const { payload: { subReadit } } = yield take(actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST);
    const sync = yield fork(postsFilterBySubReaditRequestSagaAsync, subReadit);
    yield take(actionTypes.POSTS_CANCEL_REQUEST);
    yield cancel(sync);
  }
}

export function* postsSaga() {
  yield all([
    call(postsRequestSaga),
    call(postsFilterBySubReaditRequestSaga)
  ])
}
