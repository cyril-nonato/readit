import actionTypes from "./crud-post.types";

export const createPostRequest = (post) => ({
  type: actionTypes.CREATE_POST_REQUEST,
  payload: { post }
});

export const createPostRequestSuccess = (message = 'success') => ({
  type: actionTypes.CREATE_POST_REQUEST_SUCCESS,
  payload: { message }
});

export const createPostRequestFailure = (message = 'failure') => ({
  type: actionTypes.CREATE_POST_REQUEST_FAILURE,
  payload: { message }
});

export const readPostRequest = (subReadit, id) => ({
  type: actionTypes.READ_POST_REQUEST,
  payload: { subReadit, id }
});

export const readPostRequestSuccess = (post, message = 'success') => ({
  type: actionTypes.READ_POST_REQUEST_SUCCESS,
  payload: { post, message }
});

export const readPostRequestFailure = (message = 'success') => ({
  type: actionTypes.READ_POST_REQUEST_FAILURE,
  payload: { message }
});

export const updatePostRequest = (post) => ({
  type: actionTypes.UPDATE_POST_REQUEST,
  payload: { post }
});

export const updatePostRequestSuccess = (message = 'success') => ({
  type: actionTypes.UPDATE_POST_REQUEST_SUCCESS,
  payload: { message }
});

export const updatePostRequestFailure = (message = 'failure') => ({
  type: actionTypes.UPDATE_POST_REQUEST_FAILURE,
  payload: { message }
});

export const deletePostRequest = (id) => ({
  type: actionTypes.DELETE_POST_REQUEST,
  payload: { id }
});

export const deletePostRequestSuccess = (message = 'success') => ({
  type: actionTypes.DELETE_POST_REQUEST_SUCCESS,
  payload: { message }
});

export const deletePostRequestFailure = (message = 'failure') => ({
  type: actionTypes.DELETE_POST_REQUEST_FAILURE,
  payload: { message }
});

export const crudCancelRequest = () => ({
  type: actionTypes.CRUD_CANCEL_REQUEST
});

export const crudCancelledRequest = (message = 'request cancelled') => ({
  type: actionTypes.CRUD_CANCELLED_REQUEST,
  payload: { message }
});

export const crudPostClearPopUp = () => ({
  type: actionTypes.CRUD_CLEAR_POP_UP
})