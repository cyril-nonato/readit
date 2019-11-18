import actionTypes from "./sub-readit.types";

const INITIAL_STATE = {
  list: null,
  success: null,
  failure: null,
  loading: false,
}

const subReaditReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case actionTypes.CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.CATEGORIES_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        success: action.payload.message,
        failure: null,
        loading: false,
      }
    case actionTypes.CATEGORIES_REQUEST_FAILURE:
      return {
        ...state,
        list: action.payload.list,
        success: null,
        failure: action.payload.message,
        loading: false,
      }
    default: return state;
  }
}

export default subReaditReducer;