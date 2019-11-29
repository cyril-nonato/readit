import { call, all, put, takeLeading, takeLatest } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './auth.types'
import { signUpRequestSuccess, signInRequestSuccess, signInRequestFailure, signOutRequestSuccess, signOutRequestFailure, signUpRequestFailure, } from './auth.actions';
import { votesCheckCancelRequest } from '../votes/votes.actions';

// gets user creds from firebase
function* getUserCreds(user, username) {
  const querySnapshot = yield call(rsf.firestore.getDocument, firestore.doc(`users/${username}`))

  try {
    const userCreds = yield querySnapshot.data();
    return userCreds
  } catch(error) {
    throw Error ('Error getting user creds')
  }
}

function* signUpRequestSagaAsync({ payload: { userCreds: { email, password, confirm_password, username } } }) {
  try {

    const { user } = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    const userCreds = {
      email,
      username,
      uid: user.uid,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    }
    
    // Checks for any username matching
    const querySnapshot = yield call(rsf.firestore.getDocument, firestore.doc(`users/${username}`))
    if(querySnapshot.exists) {
      throw Error('Username already in use');
    }

    // Adds user creds to firebase
    yield call(rsf.firestore.setDocument, `users/${username}`, userCreds);
    yield call(rsf.firestore.setDocument, `votes/${username}`, {uid: user.uid});
    
    // gets user creds from firebase
    const userCredsFromFirebase = yield call(getUserCreds, user, username);
    yield put(signUpRequestSuccess(userCredsFromFirebase));
    
  } catch (error) {
    yield put(signUpRequestFailure(error.message));
  }

}

function* signUpRequestSaga() {
  yield takeLeading(actionTypes.SIGN_UP_REQUEST, signUpRequestSagaAsync)
}

// Gets user Creds
function* getUserCredsByUid(uid) {
  const querySnapshot = yield call(rsf.firestore.getCollection, 
    firestore.collection('users').where('uid', '==', uid));

  const doc = querySnapshot.docs;
  const userCreds = doc[0].data();
  return userCreds;
}

function* signInRequestSagaAsync({ payload: { userCreds: { email, password } } }) {
  try {
    // Authenticate user using email and password
    const { user } = yield call(rsf.auth.signInWithEmailAndPassword, email, password);

    const userCreds = yield call(getUserCredsByUid, user.uid);

    yield put(signInRequestSuccess(userCreds));

  } catch (error) {
    yield put(signInRequestFailure(error.message));
  }

}

function* signInRequestSaga() {
  yield takeLeading(actionTypes.SIGN_IN_REQUEST, signInRequestSagaAsync);
}

function* signOutRequestSagaAsync() {
  try {
    yield call(rsf.auth.signOut);
    yield put(votesCheckCancelRequest());
    yield put(signOutRequestSuccess('Logout out success'));
  } catch (error) {
    yield put(signOutRequestFailure(error.message));
  }
}

function* signOutRequestSaga() {
  yield takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutRequestSagaAsync);
}

export function* authSaga() {
  yield all([
    call(signUpRequestSaga),
    call(signInRequestSaga),
    call(signOutRequestSaga),
  ])
}