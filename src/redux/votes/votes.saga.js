import { call, all, takeLeading, select, take, fork, put, cancel, cancelled } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './votes.types'
import { selectAuthUserCreds } from '../auth/auth.selector';
import { votesCheckRequestSuccess, votesCheckRequestFailure, voteUpRequestSuccess, voteDownRequestFailure, voteDownRequestSuccess, voteUpRequestFailure, votesCheckCancelledRequest } from './votes.actions';
import { selectVotesVotesList } from './votes.select';
import { checkUpVoteOrNotVote, checkDownVoteOrNotVote } from './votes.utils';

function* voteUpRequestSagaAsync({ payload: { id, value } }) {
  try {

    const votesList = yield select(selectVotesVotesList);
    const { username } = yield select(selectAuthUserCreds);
    console.log(votesList);
    // Checks user vote boolean for a specific post
    const boolean = checkUpVoteOrNotVote(votesList, id);
    console.log(boolean);
    if (boolean) {
      throw Error('Already Voted');
    };
    const votes = {
      ...votesList,
      [id]: true
    }

    yield call(rsf.firestore.updateDocument, `votes/${username}`, votes);
    yield call(rsf.firestore.updateDocument, `posts/${id}`, `votes`, (value + 1));
    yield put(voteUpRequestSuccess());
  } catch (error) {
    yield put(voteUpRequestFailure(error.message));
  }
}

function* voteUpRequestSaga() {
  yield takeLeading(actionTypes.VOTE_UP_REQUEST, voteUpRequestSagaAsync)
}

function* voteDownRequestSagaAsync({ payload: { id, value } }) {
  try {
    const votesList = yield select(selectVotesVotesList);
    const { username } = yield select(selectAuthUserCreds);

    // Checks user vote boolean for a specific post
    const boolean = checkDownVoteOrNotVote(votesList, id);
    console.log(boolean);
    if (boolean) {
      throw Error('Already Voted')
    };

    const votes = {
      ...votesList,
      [id]: false
    }

    yield call(rsf.firestore.updateDocument, `votes/${username}`, votes);
    yield call(rsf.firestore.updateDocument, `posts/${id}`, `votes`, (value - 1));
    yield put(voteDownRequestSuccess());
  } catch (error) {
    yield put(voteDownRequestFailure(error.message));
  }
}

function* voteDownRequestSaga() {
  yield takeLeading(actionTypes.VOTE_DOWN_REQUEST, voteDownRequestSagaAsync)
}

function* votesCheckRequestSagaAsync(userCreds) {

  console.log('ye i ran');
  const channel = yield call(rsf.firestore.channel,
    firestore.doc(`votes/${userCreds.username}`));

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const votesList = querySnapshot.data();
      yield put(votesCheckRequestSuccess(votesList));
    }
  } catch (error) {
    yield put(votesCheckRequestFailure(error.message))
  } finally {
    if( yield cancelled()) {
      yield put(votesCheckCancelledRequest());
    }
  }
}

function* votesCheckRequestSaga() {

  while (yield take(actionTypes.VOTES_CHECK_REQUEST)) {
    const userCreds = yield select(selectAuthUserCreds);

    if (!userCreds) {
      return null;
    }

    const sync = yield fork(votesCheckRequestSagaAsync, userCreds);
    yield take(actionTypes.VOTES_CHECK_CANCEL_REQUEST);
    yield cancel(sync);
  }
}

export function* votesSaga() {
  yield all([
    call(voteUpRequestSaga),
    call(voteDownRequestSaga),
    call(votesCheckRequestSaga)
  ])
}