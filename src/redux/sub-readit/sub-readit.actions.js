import actionTypes from "./sub-readit.types";

export const subReaditListsRequest = () => ({
  type: actionTypes.SUB_READIT_LISTS_REQUEST
});

export const subReaditListsRequestSuccess = (lists, message = 'success') => ({
  type: actionTypes.SUB_READIT_LISTS_REQUEST_SUCCESS,
  payload: { lists, message }
});

export const subReaditListsRequestFailure = (message = 'failure') => ({
  type: actionTypes.SUB_READIT_LISTS_REQUEST_FAILURE,
  payload: { message }
});

export const subReaditRequest = (name) => ({
  type: actionTypes.SUB_READIT_REQUEST,
  payload: { name }
});

export const subReaditRequestSuccess = (subReadit, message = 'success') => ({
  type: actionTypes.SUB_READIT_REQUEST_SUCCESS,
  payload: { subReadit, message }
});

export const subReaditRequestFailure = (subReadit, message = 'failure') => ({
  type: actionTypes.SUB_READIT_REQUEST_FAILURE,
  payload: { subReadit, message }
});

export const subReaditCancelRequest = () => ({
  type: actionTypes.SUB_READIT_CANCEL_REQUEST
});

export const subReaditCancelledRequest = (message = 'request cancelled') => ({
  type: actionTypes.SUB_READIT_CANCELLED_REQUEST,
  payload: { message }
});

export const subReaditCreateRequest = (details) => ({
  type: actionTypes.SUB_READIT_CREATE_REQUEST,
  payload: { details }
});

export const subReaditCreateRequestSuccess = (message = 'success') => ({
  type: actionTypes.SUB_READIT_CREATE_REQUEST_SUCCESS,
  payload: { message }
});

export const subReaditCreateRequestFailure = (message = 'failure') => ({
  type: actionTypes.SUB_READIT_CREATE_REQUEST_FAILURE,
  payload: { message }
});