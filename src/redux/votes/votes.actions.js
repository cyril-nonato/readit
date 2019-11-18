import actionTypes from "./votes.types";

export const voteUpRequest = (id, value) => ({
  type: actionTypes.VOTE_UP_REQUEST,
  payload: { id, value }
});

export const voteUpRequestSuccess = (message = 'success') => ({
  type: actionTypes.VOTE_UP_REQUEST_SUCCESS,
  payload: { message }
});

export const voteUpRequestFailure = (message = 'failure') => ({
  type: actionTypes.VOTE_UP_REQUEST_FAILURE,
  payload: { message }
});

export const voteDownRequest = (id, value) => ({
  type: actionTypes.VOTE_DOWN_REQUEST,
  payload: { id, value }
});

export const voteDownRequestSuccess = (message = 'success') => ({
  type: actionTypes.VOTE_DOWN_REQUEST_SUCCESS,
  payload: { message }
});

export const voteDownRequestFailure = (message = 'failure') => ({
  type: actionTypes.VOTE_DOWN_REQUEST_FAILURE,
  payload: { message }
});

export const votesCheckRequest = () => ({
  type: actionTypes.VOTES_CHECK_REQUEST
});

export const votesCheckRequestSuccess = (votes, message = 'success') => ({
  type: actionTypes.VOTES_CHECK_REQUEST_SUCCESS,
  payload: { votes, message }
});

export const votesCheckRequestFailure = (message = 'error') => ({
  type: actionTypes.VOTES_CHECK_REQUEST_FAILURE,
  payload: { message }
});