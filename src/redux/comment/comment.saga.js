import { call, all, put, takeLeading, select, take, fork, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './comment.types'
import { selectAuthUserCreds } from '../auth/auth.selector'

function* addCommentRequestSagaAsync({payload: {comment}}) {
  const {username} = yield select(selectAuthUserCreds);
  const {comments} = yield select(selectCrudPostPost)
  try {

  } catch (error) {
    
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