import actionTypes from "./categories.types";

const INITIAL_STATE = {
  all: null,
  specific: null,
  failure: null,
  loading: false,
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case actionTypes.CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.CATEGORIES_REQUEST_SUCCESS:
      return {
        ...state,
        all: action.payload,
        loading: false,
      }
    case actionTypes.CATEGORIES_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}

export default categoriesReducer;