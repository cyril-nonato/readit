import actionTypes from "./auth.types";

export const INITIAL_STATE = {
  userCreds: null,
  success: null,
  failure: null,
  loading: false,
  popUp: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SIGN_UP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        userCreds: action.payload.userCreds,
        popUp: true
      }
    case actionTypes.SIGN_UP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true
      }
    case actionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        userCreds: action.payload.userCreds,
        popUp: true
      }
    case actionTypes.SIGN_IN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true
      }
    case actionTypes.AUTH_POP_UP:
      return {
        ...state,
        popUp: false
      }
    case actionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SIGN_OUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        userCreds: null,
        success: action.payload.message,
        failure: null,
        popUp: true
      }
    case actionTypes.SIGN_OUT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        userCreds: null,
        success: null,
        failure: action.payload.message,
        popUp: true
      }
    default: return state
  }
}

export default authReducer;