import actionTypes from "./sub-readit.types";

export const subReaditRequest = () => ({
  type: actionTypes.SUB_READIT_REQUEST
});

export const subReaditRequestSuccess = (lists, message = 'success') => ({
  type: actionTypes.SUB_READIT_REQUEST_SUCCESS,
  payload: { lists, message }
});

export const subReaditRequestFailure = (message = 'failure') => ({
  type: actionTypes.SUB_READIT_REQUEST_FAILURE,
  payload: { message }
});