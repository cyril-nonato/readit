import actionTypes from "./crud-post.types"

const INITIAL_STATE = {
  success: null,
  failure: null,
  loading: false,
  popup: false,
  post: null,
}

const crudPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_POST_REQUESTL:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CREATE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        popUp: true,
      }
    case actionTypes.CREATE_POST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true,
      }
    case actionTypes.READ_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.READ_POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        popUp: true,
        post: action.payload.post
      }
    case actionTypes.READ_POST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true,
      }
    default: return state;
  }
};

export default crudPostReducer;