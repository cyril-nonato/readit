import { call, all, put, take, fork, cancel, cancelled, select } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './posts.types'
import { docsToMap } from '../utils';
import { postsRequestSuccess, postsRequestFailure, postsFilterBySubReaditRequestSuccess, postsFilterBySubReaditRequestFailure, postsCancelledRequest, postsFilterByUsernameRequestSuccess, postsFilterByUsernameRequestFailure } from './posts.actions';
import { addCommentsLengthProps } from './posts.utils';
import { selectAuthUserCreds } from '../auth/auth.selector';

function* postsRequestSagaAsync() {
  const channel = yield call(rsf.firestore.channel,
    firestore.collection('posts').orderBy('created_at', 'desc'));;

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

function* postsFilter(channel) {
  const querySnapshot = yield take(channel);
  const docs = querySnapshot.docs;
  const posts = docsToMap(docs);

  return posts
}

function* postsFilterBySubReaditRequestSagaAsync(subReadit) {
  const channel = yield call(rsf.firestore.channel,
    firestore.collection(`posts`)
      .where('subReadit', "==", subReadit)
      .orderBy('created_at', 'desc')
  );

  try {
    while (true) {
      const posts = yield call(postsFilter, channel)
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

function* postsFilterByUserNameRequestAsync() {
  const { username } = yield select(selectAuthUserCreds);
  const channel = yield call(rsf.firestore.channel,
    firestore.collection(`posts`)
      .where('created_by', "==", username)
      .orderBy('created_at', 'desc')
  );

  try {
    while (true) {
      const posts = yield call(postsFilter, channel);
      yield put(postsFilterByUsernameRequestSuccess(posts))
    }
  } catch (error) {
    yield put(postsFilterByUsernameRequestFailure(error.message))
  }

}

function* postsFilterByUserNameRequest() {
  while (true) {
    yield take(actionTypes.POSTS_FILTER_BY_USERNAME_REQUEST);
    const sync = yield fork(postsFilterByUserNameRequestAsync);
    yield take(actionTypes.POSTS_CANCEL_REQUEST);
    yield cancel(sync);
  }
}

export function* postsSaga() {
  yield all([
    call(postsRequestSaga),
    call(postsFilterBySubReaditRequestSaga),
    call(postsFilterByUserNameRequest)
  ])
}
