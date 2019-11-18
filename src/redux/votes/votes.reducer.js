import actionTypes from "./votes.types";

const INITIAL_STATE = {
  votesList: null,
  loading: false,
  success: null,
  failure: null,
  popUp: false
};

const votesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.VOTES_CHECK_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.VOTES_CHECK_REQUEST_SUCCESS:
      return {
        ...state,
        votesList: action.payload.votes,
        success: action.payload.message,
        failure: null,
        loading: false,
      }
    case actionTypes.VOTES_CHECK_REQUEST_FAILURE:
      return {
        ...state,
        success: null,
        failure: action.payload.message,
        loading: false,
      }
    default: return state;
  }
};

export default votesReducer;