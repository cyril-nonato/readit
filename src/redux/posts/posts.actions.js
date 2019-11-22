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

export const postFilterBySubReaditRequest = (subReadit) => ({
  type: actionTypes.POST_FILTER_BY_SUBREADIT_REQUEST,
  payload: { subReadit }
});

export const postFilterBySubReaditRequestSuccess = (posts, message = 'success') => ({
  type: actionTypes.POST_FILTER_BY_SUBREADIT_REQUEST_SUCCESS,
  payload: { posts, message }
});

export const postFilterBySubReaditRequestFailure = (posts, message = 'failure') => ({
  type: actionTypes.POST_FILTER_BY_SUBREADIT_REQUEST_FAILURE,
  payload: { posts, message }
});

export const postsCancelRequest = () => ({
  type: actionTypes.POSTS_CANCEL_REQUEST
});

export const postsCancelledRequest = (message = 'request cancelled') => ({
  type: actionTypes.POSTS_CANCELLED_REQUEST,
  payload: message
});