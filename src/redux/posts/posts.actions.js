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