import { call, all, put, takeLeading, select } from 'redux-saga/effects'
import rsf, { firebase } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './comment.types'
import { selectAuthUserCreds } from '../auth/auth.selector'
import { selectCrudPostPost } from '../crud-post/crud-post.selector';
import { addCommentRequestSuccess, addCommentRequestFailure } from './comment.actions';
import { updateComment, arrayToObj } from './comments.utils';

function* addCommentRequestSagaAsync({ payload: { comment } }) {
  const { username } = yield select(selectAuthUserCreds);
  const {comments, id} = yield select(selectCrudPostPost);
  const commentToAdd = {
    commented_by: username,
    created_at: firebase.firestore.FieldValue.serverTimestamp(),
    comment
  };

  // push new comment to the comments lists
  const updatedComments = updateComment(comments, commentToAdd);
  // Convert Array to Object
  const newObjComment = arrayToObj(updatedComments);
  console.log(newObjComment);
  try {
    yield call(rsf.firestore.updateDocument, `posts/${id}`, 'comments', newObjComment);
    yield put(addCommentRequestSuccess());
  } catch (error) {
    yield put(addCommentRequestFailure(error.message));
  }
}

function* addCommentRequestSaga() {
  yield takeLeading(actionTypes.ADD_COMMENT_REQUEST, addCommentRequestSagaAsync)
}

export function* commentSaga() {
  yield all([
    call(addCommentRequestSaga)
  ])
}