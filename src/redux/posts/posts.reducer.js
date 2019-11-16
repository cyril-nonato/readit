import actionTypes from "./posts.types";

const INITIAL_STATE = {
  allPosts: null,
  subReaditPosts: null,
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
        loading: true
      }
    case actionTypes.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        allPosts: action.payload.posts,
        success: action.payload.message,
        failure: null,
        loading: false
      }
    case actionTypes.POSTS_REQUEST_FAILURE:
      return {
        ...state,
        success: null,
        failure: action.payload.message,
        loading: false
      }
    default: return state;
  }
}

export default postsReducer;