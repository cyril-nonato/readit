import { call, all, put, takeLeading, select, take, fork, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './crud-post.types'
import { selectAuthUserCreds } from '../auth/auth.selector'
import { createPostRequestFailure, createPostRequestSuccess, crudCancelledRequest, readPostRequestFailure, readPostRequestSuccess } from './crud-post.actions';
import { checkIfLinkOrPost } from './crud-post.utils';

function* createPostSagaAsync({ payload: { post } }) {
  try {
    const userCreds = yield select(selectAuthUserCreds);
    const checkPost = checkIfLinkOrPost(post);

    const updatedPost = {
      ...checkPost,
      created_by: userCreds.username,
      uid: userCreds.uid,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      votes: 0
    }

    yield call(rsf.firestore.addDocument, 'posts', updatedPost);
    yield put(createPostRequestSuccess());

  } catch (error) {
    yield put(createPostRequestFailure(error.message));
  }

}

function* createPostSaga() {
  yield takeLeading(actionTypes.CREATE_POST_REQUEST, createPostSagaAsync)
}

function* readPostSagaAsync(subReadit, id) {
  const channel = yield call(rsf.firestore.channel, firestore.doc(`posts/${id}`));

  try {
    const querySnapshot = yield take(channel);
    
    // Checks firestore for any document with the said id
    if(!querySnapshot.exists) {
      throw Error('Not found')
    }
    const post = querySnapshot.data();

    const updatedPost = {
      ...post,
      commentsLength: post.comments.length
    }

    yield put(readPostRequestSuccess(updatedPost))
  } catch (error) {
    yield put(readPostRequestFailure(error.message))
  } finally {
    if(yield cancelled()) {
      yield put(crudCancelledRequest())
    }
  }
}

function* readPostSaga() {
  while (true) {
    const {payload: {subReadit, id}} = yield take(actionTypes.READ_POST_REQUEST);
    const sync = yield fork(readPostSagaAsync, subReadit, id);
    yield take(actionTypes.CRUD_CANCEL_REQUEST);
    yield cancel(sync);
  }
}

export function* crudPostSaga() {
  yield all([
    call(createPostSaga),
    call(readPostSaga)
  ])
}