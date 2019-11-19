import { call, all, put, take, fork } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './posts.types'
import { docsToMap } from '../utils';
import { postsRequestSuccess, postsRequestFailure } from './posts.actions';

function* postsRequestSagaAsync(parameter) {
  let channel;

  switch (parameter) {
    case 'all':
      channel = yield call(rsf.firestore.channel,
        firestore.collection('posts').orderBy('created_at', 'desc'));
      break;
    case '':
      channel = yield call(rsf.firestore.channel,
        firestore.collection('posts').orderBy('votes', 'desc'));
      break;
    default: throw Error('not found');
  }

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
  const { payload: { parameter } } = yield take(actionTypes.POSTS_REQUEST)
  const sync = yield fork(postsRequestSagaAsync, parameter);

}

export function* postsSaga() {
  yield all([
    call(postsRequestSaga)
  ])
}
