import actionTypes from "./posts.types";

export const postsRequest = (parameter) => ({
  type: actionTypes.POSTS_REQUEST,
  payload: { parameter }
});

export const postsRequestSuccess = (posts, message) => ({
  type: actionTypes.POSTS_REQUEST_SUCCESS,
  payload: { posts, message }
});

export const postsRequestFailure = (message) => ({
  type: actionTypes.POSTS_REQUEST_FAILURE,
  payload: { message }
});

export const postsFilterBySubReaditRequest = (subReadit) => ({
  type: actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST,
  payload: { subReadit }
});

export const postsFilterBySubReaditRequestSuccess = (posts, message = 'success') => ({
  type: actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST_SUCCESS,
  payload: { posts, message }
});

export const postsFilterBySubReaditRequestFailure = (posts, message = 'failure') => ({
  type: actionTypes.POSTS_FILTER_BY_SUBREADIT_REQUEST_FAILURE,
  payload: { posts, message }
});

export const postsCancelRequest = () => ({
  type: actionTypes.POSTS_CANCEL_REQUEST
});

export const postsCancelledRequest = (message = 'request cancelled') => ({
  type: actionTypes.POSTS_CANCELLED_REQUEST,
  payload: message
});

export const postsClearPopUp = () => ({
  type: actionTypes.POSTS_CLEAR_POP_UP
})