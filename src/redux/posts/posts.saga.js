import { call, all, put, take, fork } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './posts.types'
import { docsToMap } from '../utils';
import { postsRequestSuccess, postsRequestFailure } from './posts.actions';

function* postsRequestSagaAsync() {
  const channel = yield call(rsf.firestore.channel, 
    firestore.collection('posts').orderBy('votes', 'desc'));

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const allPosts = docsToMap(docs);
      yield put(postsRequestSuccess(allPosts, 'Fetched success'));
    }
  } catch (error) {
    yield put(postsRequestFailure(error.message));
  }
}

function* postsRequestSaga() {
  while ( yield take(actionTypes.POSTS_REQUEST)) {
    const sync = yield fork(postsRequestSagaAsync);

  }
}

export function* postsSaga() {
  yield all([
    call(postsRequestSaga)
  ])
}
