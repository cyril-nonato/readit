import actionTypes from "./crud-post.types";

export const createPostRequest = ({ contents }) => ({
  types: actionTypes.CREATE_POST_REQUEST,
  payload: { contents }
});

export const createPostRequestSuccess = () => ({
  types: actionTypes.CREATE_POST_REQUEST_SUCCESS
});

export const createPostRequestFailure = () => ({
  types: actionTypes.CREATE_POST_REQUEST_FAILURE
});
