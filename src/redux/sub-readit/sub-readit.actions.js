import actionTypes from "./sub-readit.types";

export const subReaditRequest = () => ({
  types: actionTypes.SUB_READIT_REQUEST
});

export const subReaditRequestSuccess = () => ({
  types: actionTypes.SUB_READIT_REQUEST_SUCCESS
});

export const subReaditRequestFailure = () => ({
  types: actionTypes.SUB_READIT_REQUEST_FAILURE
});