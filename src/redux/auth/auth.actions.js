import actionTypes from "./auth.types";

export const signUpRequest = (userCreds) => ({
  type: actionTypes.SIGN_UP_REQUEST,
  payload: { userCreds }
});

export const signUpRequestSuccess = (userCreds, message) => ({
  type: actionTypes.SIGN_UP_REQUEST_SUCCESS,
  payload: { userCreds, message }
});

export const signUpRequestFailure = (message) => ({
  type: actionTypes.SIGN_UP_REQUEST_FAILURE,
  payload: { message }
});

export const signInRequest = (userCreds) => ({
  type: actionTypes.SIGN_IN_REQUEST,
  payload: { userCreds }
});

export const signInRequestSuccess = (userCreds, message) => ({
  type: actionTypes.SIGN_IN_REQUEST_SUCCESS,
  payload: { userCreds, message }
});

export const signInRequestFailure = (message) => ({
  type: actionTypes.SIGN_IN_REQUEST_FAILURE,
  payload: { message }
});

export const authPopUp = () => ({
  type: actionTypes.AUTH_POP_UP,
});

export const signOutRequest = () => ({
  type: actionTypes.SIGN_OUT_REQUEST
});

export const signOutRequestSuccess = (message) => ({
  type: actionTypes.SIGN_OUT_REQUEST_SUCCESS,
  payload: { message }
});

export const signOutRequestFailure = (message) => ({
  type: actionTypes.SIGN_OUT_REQUEST_FAILURE,
  payload: { message }
});