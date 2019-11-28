import actionTypes from "./crud-post.types"

const INITIAL_STATE = {
  createPostData: {
    title: '',
    text: '',
    image: '',
    icon: '',
    subReadit: ''
  },
  success: null,
  failure: null,
  loading: false,
  popUp: false,
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
        failure: null,
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
    case actionTypes.UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.UPDATE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        popUp: true,
      }
    case actionTypes.UPDATE_POST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true,
      }
    case actionTypes.DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.DELETE_POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        failure: null,
        popUp: true,
      }
    case actionTypes.DELETE_POST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        failure: action.payload.message,
        popUp: true,
      }
    case actionTypes.CRUD_CANCELLED_REQUEST:
      return {
        ...state,
        post: null,
        popUp: false
      }
    case actionTypes.CRUD_CLEAR_POP_UP:
      return {
        ...state,
        success: null,
        failure: null,
        popUp: false,
      }
    default: return state;
  }
};

export default crudPostReducer;