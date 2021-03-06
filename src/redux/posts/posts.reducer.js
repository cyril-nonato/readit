import actionTypes from "./posts.types";

const INITIAL_STATE = {
  allPosts: null,
  filteredPosts: null,
  success: null,
  failure: null,
  loading: false,
  popUp: false
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        allPosts: action.payload.posts,
        success: action.payload.message,
        failure: null,
        loading: false,
        popUp: true,
      }
    case actionTypes.POSTS_REQUEST_FAILURE:
      return {
        ...state,
        success: null,
        failure: action.payload.message,
        loading: false,
        popUp: true
      }
    case actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredPosts: action.payload.posts,
        success: action.payload.message,
        popUp: true,
      }
    case actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload.message,
        popUp: true,
      }
    case actionTypes.POSTS_FILTER_BY_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POSTS_FILTER_BY_USERNAME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredPosts: action.payload.posts,
        success: action.payload.message,
        popUp: true,
      }
    case actionTypes.POSTS_FILTER_BY_USERNAME_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload.message,
        popUp: true,
      }
    case actionTypes.POSTS_CANCELLED_REQUEST:
      return {
        ...state,
        success: action.payload.message,
        allPosts: null,
        filteredPosts: null,
        popUp: true,
      }
    default: return state;
  }
}

export default postsReducer;