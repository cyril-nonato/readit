import actionTypes from "./comment.types";

const INITIAL_STATE = {
  success: null,
  failure: null,
  popUp: true,
  loading: false
}

export const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.ADD_COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        popUp: true
      }
    case actionTypes.ADD_COMMENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true
      }
    default: return state;
  }
}

export default commentsReducer;