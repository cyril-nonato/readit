import { call, all, put, take, fork, takeLeading } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'

import { docsToMap } from '../utils';
import actionTypes from './sub-readit.types';
import { subReaditListsRequestSuccess, subReaditListsRequestFailure, subReaditRequestSuccess, subReaditRequestFailure } from './sub-readit.actions';

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
  }
}

function* subReaditListsRequestSaga() {
  yield take(actionTypes.SUB_READIT_LISTS_REQUEST);
  const sync = yield fork(subReaditListsRequestSagaAsync);
}

function* subReaditRequestSagaAsync({payload: {name}}) {
  try {
    const querySnapshot = yield call(rsf.firestore.getDocument, `subReadit/${name}`);
    if(!querySnapshot.exists) {
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

export function* subReaditSaga() {
  yield all([
    call(subReaditListsRequestSaga),
    call(subReaditRequestSaga)
  ])
}