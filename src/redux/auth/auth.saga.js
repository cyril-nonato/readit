import { call, all, put, takeLeading, takeLatest, take } from 'redux-saga/effects'
import rsf, { firebase, firestore } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './auth.types'
import { signUpRequestSuccess, signInRequestSuccess, signInRequestFailure, signOutRequestSuccess, signOutRequestFailure, checkAuthUserRequestSuccess, checkAuthUserRequestFailure } from './auth.actions';

// gets user creds from firebase
function* getUserCreds(user) {
  const querySnapshot = yield call(rsf.firestore.getDocument, firestore.doc(`users/${user.uid}`))

  try {
    const data = yield querySnapshot.data();
    const userCreds = {
      ...data,
      uid: user.uid
    }
    return userCreds
  } catch(error) {
    throw Error ('Error getting user creds')
  }
}

function* signUpRequestSagaAsync({ payload: { userCreds: { email, password, confirm_password, ...others } } }) {
  try {

    const { user } = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    const userCreds = {
      email,
      ...others,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    }

    // Adds user creds to firebase
    yield call(rsf.firestore.setDocument, `users/${user.uid}`, userCreds);

    // gets user creds from firebase
    const userCredsFromFirebase = yield call(getUserCreds, user);

    yield put(signUpRequestSuccess(userCredsFromFirebase));
  } catch (error) {
    yield console.log(error.message);
  }

}

function* signUpRequestSaga() {
  yield takeLeading(actionTypes.SIGN_UP_REQUEST, signUpRequestSagaAsync)
}

function* signInRequestSagaAsync({ payload: { userCreds: { email, password } } }) {
  try {
    //Authenticate user using email and password
    const { user } = yield call(rsf.auth.signInWithEmailAndPassword, email, password);

    const userCreds = yield call(getUserCreds, user);
    console.log(userCreds);
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