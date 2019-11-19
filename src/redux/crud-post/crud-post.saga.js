import { call, all, put, takeLeading, fork } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './crud-post.types'

function* createPostSagaAsync({payload: {contents}}) {
  yield 
}

function* createPostSaga() {
  yield takeLeading(actionTypes.CREATE_POST_REQUEST, createPostSagaAsync)
}

export function* crudPostSaga() {
  yield all([
    call(createPostSaga)
  ])
}