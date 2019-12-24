import { call, all, put, take, fork, takeLeading, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'

import { docsToMap } from '../utils';
import actionTypes from './sub-readit.types';
import { subReaditListsRequestSuccess, subReaditListsRequestFailure, subReaditRequestSuccess, subReaditRequestFailure, subReaditCancelledRequest, subReaditCreateRequestSuccess, subReaditCreateRequestFailure } from './sub-readit.actions';

function* subReaditListsRequestSagaAsync() {
  const channel = yield call(rsf.firestore.channel,
    firestore.collection('subReadit'));

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const lists = docsToMap(docs);
      yield put(subReaditListsRequestSuccess(lists, 'Fetched success'));
    }
  } catch (error) {
    yield put(subReaditListsRequestFailure(error.message));
  } finally {
    if (yield cancelled()) {
      yield put(subReaditCancelledRequest())
    }
  }
}

function* subReaditListsRequestSaga() {
  yield take(actionTypes.SUB_READIT_LISTS_REQUEST);
  const sync = yield fork(subReaditListsRequestSagaAsync);
  yield take(actionTypes.SUB_READIT_CANCEL_REQUEST);
  yield cancel(sync);
}

function* subReaditRequestSagaAsync({ payload: { name } }) {
  try {
    const querySnapshot = yield call(rsf.firestore.getDocument, `subReadit/${name}`);
    if (!querySnapshot.exists) {
      throw Error('Not found');
    }
    const data = querySnapshot.data();
    const subReadit = {
      ...data,
      id: querySnapshot.id
    }
    yield put(subReaditRequestSuccess(subReadit));
  } catch (error) {
    yield put(subReaditRequestFailure(error.message));
  }
}

function* subReaditRequestSaga() {
  yield takeLeading(actionTypes.SUB_READIT_REQUEST, subReaditRequestSagaAsync);
}

function* subReaditCreateRequestSagaAsync({ payload: { details } }) {
  const {name, icon, background, text} = details;
  try {
    yield call(rsf.firestore.setDocument, `subReadit/${name}`, {icon, background ,text});
    yield put(subReaditCreateRequestSuccess())
  } catch (error) {
    yield put(subReaditCreateRequestFailure(error.message))
  }
}

function* subReaditCreateRequestSaga() {
  yield takeLeading(actionTypes.SUB_READIT_CREATE_REQUEST, subReaditCreateRequestSagaAsync)
}

export function* subReaditSaga() {
  yield all([
    call(subReaditListsRequestSaga),
    call(subReaditRequestSaga),
    call(subReaditCreateRequestSaga)
  ])
}