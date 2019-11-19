import { call, all, put, take, fork } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'

import { docsToMap } from '../utils';
import actionTypes from './sub-readit.types';
import { subReaditRequestSuccess, subReaditRequestFailure } from './sub-readit.actions';

function* subReaditRequestSagaAsync() {
  const channel = yield call(rsf.firestore.channel, 
    firestore.collection('subreadit'));

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const lists = docsToMap(docs);
      yield put(subReaditRequestSuccess(lists, 'Fetched success'));
    }
  } catch (error) {
    yield put(subReaditRequestFailure(error.message));
  }
}

function* subReaditRequestSaga() {
  while (yield take(actionTypes.SUB_READIT_REQUEST)) {
    const sync = yield fork(subReaditRequestSagaAsync);
  }
}

export function* subReaditSaga() {
  yield all([
    call(subReaditRequestSaga)
  ])
}