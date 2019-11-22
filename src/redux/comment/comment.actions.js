import actionTypes from "./comment.types";

export const addCommentRequest = () => ({
  type: actionTypes.ADD_COMMENT_REQUEST
});

export const addCommentRequestSuccess = (message = 'success') => ({
  type: actionTypes.ADD_COMMENT_REQUEST_SUCCESS,
  payload: { message }
});

export const addCommentRequestFailure = (message = 'failure') => ({
  type: actionTypes.ADD_COMMENT_REQUEST_SUCCESS,
  payload: { message }
});