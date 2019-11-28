import { call, all, put, takeLeading, select, take, fork, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './crud-post.types'
import { selectAuthUserCreds } from '../auth/auth.selector'
import { createPostRequestFailure, createPostRequestSuccess, crudCancelledRequest, readPostRequestFailure, readPostRequestSuccess, deletePostRequestSuccess, deletePostRequestFailure, updatePostRequestFailure } from './crud-post.actions';
import { checkIfLinkOrPost, convertPostCommentsToArray } from './crud-post.utils';

function* createPostSagaAsync({ payload: { post } }) {
  try {
    const userCreds = yield select(selectAuthUserCreds);

    // Removes the link string or post string depending on type 
    const checkPost = checkIfLinkOrPost(post);

    const updatedPost = {
      ...checkPost,
      created_by: userCreds.username,
      uid: userCreds.uid,
      edited: false,
      type: post.type,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      votes: 0,
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
    while (true) {
      const querySnapshot = yield take(channel);

      // Checks firestore for any document with the said id
      if (!querySnapshot.exists) {
        throw Error('Not found')
      }
      const post = querySnapshot.data();

      if (post.subReadit !== subReadit) {
        throw Error('Not found')
      }
      const updatedPost = convertPostCommentsToArray(post, id);
      yield put(readPostRequestSuccess(updatedPost))
    }
  } catch (error) {
    yield put(readPostRequestFailure(error.message))
  } finally {
    if (yield cancelled()) {
      yield put(crudCancelledRequest())
    }
  }
}

function* readPostSaga() {
  while (true) {
    const { payload: { subReadit, id } } = yield take(actionTypes.READ_POST_REQUEST);
    const sync = yield fork(readPostSagaAsync, subReadit, id);
    yield take(actionTypes.CRUD_CANCEL_REQUEST);
    yield cancel(sync);
  }
}

function* updatePostSagaAsync({ payload: { post } }) {
  const checkPost = checkIfLinkOrPost(post);
  try {
    yield call(rsf.firestore.updateDocument, `posts/${post.id}`, checkPost);

  } catch (error) {
    yield put(updatePostRequestFailure(error.message))
  }
}

function* updatePostSaga() {
  yield takeLeading(actionTypes.UPDATE_POST_REQUEST, updatePostSagaAsync);
}

function* deletePostSagaAsync({ payload: { id } }) {
  try {
    yield call(rsf.firestore.deleteDocument, `posts/${id}`);
    yield put(deletePostRequestSuccess());
  } catch (error) {
    yield put(deletePostRequestFailure());
  }
}

function* deletePostSaga() {
  yield takeLeading(actionTypes.DELETE_POST_REQUEST, deletePostSagaAsync)
}

export function* crudPostSaga() {
  yield all([
    call(createPostSaga),
    call(readPostSaga),
    call(deletePostSaga),
    call(updatePostSaga)
  ])
}