import actionTypes from "./sub-readit.types";

const INITIAL_STATE = {
  lists: null,
  sub: null,
  success: null,
  failure: null,
  loading: false,
}

const subReaditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SUB_READIT_LISTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SUB_READIT_LISTS_REQUEST_SUCCESS:
      return {
        ...state,
        lists: action.payload.lists,
        success: action.payload.message,
        failure: null,
        loading: false,
      }
    case actionTypes.SUB_READIT_LISTS_REQUEST_FAILURE:
      return {
        ...state,
        success: null,
        failure: action.payload.message,
        loading: false,
      }
    case actionTypes.SUB_READIT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SUB_READIT_REQUEST_SUCCESS:
      return {
        ...state,
        sub: action.payload.subReadit,
        success: action.payload.message,
        failure: null,
        loading: false,
      }
    case actionTypes.SUB_READIT_REQUEST_FAILURE:
      return {
        ...state,
        success: null,
        failure: action.payload.message,
        loading: false,
      }
    case actionTypes.SUB_READIT_CANCELLED_REQUEST:
      return {
        ...state,
        success: action.payload.message
      }
    default: return state;
  }
}

export default subReaditReducer;