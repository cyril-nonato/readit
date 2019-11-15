import { call, all, put, takeLeading } from 'redux-saga/effects'
import rsf, { firebase } from '../../firebase-redux-saga/firebase-redux-saga'
import actionTypes from './auth.types'
import { signUpRequestSuccess, signInRequestSuccess, signInRequestFailure } from './auth.actions';

// gets user creds from firebase
function* getUserCreds(user) {
  const snapshot = yield call(rsf.firestore.getDocument, `users/${user.uid}`);
  const data = yield snapshot.data();
  const userCreds = {
    ...data,
    user_id: user.uid
  }
  return userCreds
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

    yield put(signInRequestSuccess(userCreds));
  } catch (error) {
    yield put(signInRequestFailure(error.message));
  }

}

function* signInRequestSaga() {
  yield takeLeading(actionTypes.SIGN_IN_REQUEST, signInRequestSagaAsync)
}

export function* authSaga() {
  yield all([
    call(signUpRequestSaga),
    call(signInRequestSaga)
  ])
}