import { call, all, takeLeading, select, take, fork, put } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './votes.types'
import { selectAuthUserCreds } from '../auth/auth.selector';
import { checkUpVoteOrNotVote, checkDownVoteOrNotVote } from './votes.utils';
import { votesCheckRequestSuccess, votesCheckRequestFailure, voteUpRequestSuccess, voteDownRequestFailure, voteDownRequestSuccess, voteUpRequestFailure } from './votes.actions';
import { selectVotesVotesList } from './votes.select';
import { isEmpty } from '@firebase/util';

function* voteUpRequestSagaAsync({ payload: { id, value } }) {
  try {

    const votesList = yield select(selectVotesVotesList);
    const { uid } = yield select(selectAuthUserCreds);

    // creates an object to firebase
    if(isEmpty(votesList)) {
      const obj = {
        votes: {
          [id]: true      
        }
      };

      yield call(rsf.firestore.setDocument, `votes/${uid}`, obj);
      yield call(rsf.firestore.updateDocument, `posts/${id}`, `votes`, (value + 1));
      yield put(voteUpRequestSuccess());
      return;
    }
    // if it returns true, user already upvoted
    const downVoteOrNotVote = checkUpVoteOrNotVote(votesList, id);

    if (downVoteOrNotVote) {
      throw Error('Already Voted');
    };

    yield call(rsf.firestore.updateDocument, `votes/${uid}`, `votes.${id}`, true);
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
    const { uid } = yield select(selectAuthUserCreds);

    // creates an object to firebase
    if(isEmpty(votesList)) {
      const obj = {
        votes: {
          [id]: false      
        }
      };
      yield call(rsf.firestore.setDocument, `votes/${uid}`, obj);
      yield call(rsf.firestore.updateDocument, `posts/${id}`, `votes`, (value - 1));
      yield put(voteDownRequestSuccess());
      return;
    }

    // if it returns false, user already downvoted
    const upVoteOrNotVote = checkDownVoteOrNotVote(votesList, id);

    if (!upVoteOrNotVote) {
      throw Error('Already Voted')
    };

    yield call(rsf.firestore.updateDocument, `votes/${uid}`, `votes.${id}`, false);
    yield call(rsf.firestore.updateDocument, `posts/${id}`, `votes`, (value - 1));
    yield put(voteDownRequestSuccess());
  } catch (error) {
    yield put(voteDownRequestFailure(error.message));
  }
}

function* voteDownRequestSaga() {
  yield takeLeading(actionTypes.VOTE_DOWN_REQUEST, voteDownRequestSagaAsync)
}

function* votesCheckRequestSagaAsync() {
  const userCreds = yield select(selectAuthUserCreds);

  const channel = yield call(rsf.firestore.channel,
    firestore.doc(`votes/${userCreds.uid}`));
  try {
    while (true) {
      const querySnapshot = yield take(channel);
      console.log(querySnapshot.exists);
      if (!querySnapshot.exists) {
        return yield put(votesCheckRequestSuccess({}))
      }

      const votesList = querySnapshot.data();
      yield put(votesCheckRequestSuccess(votesList));
    }
  } catch (error) {
    yield put(votesCheckRequestFailure(error.message))
  }
}

function* votesCheckRequestSaga() {

  while (yield take(actionTypes.VOTES_CHECK_REQUEST)) {
    const sync = yield fork(votesCheckRequestSagaAsync);
  }
}

export function* votesSaga() {
  yield all([
    call(voteUpRequestSaga),
    call(voteDownRequestSaga),
    call(votesCheckRequestSaga)
  ])
}