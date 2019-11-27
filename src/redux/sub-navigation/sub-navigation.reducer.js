import actionTypes from "./sub-navigation.types";

const INITIAL_STATE = {
  style: 'card'
};

const subNavigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECT_POST_STYLE:
      return {
        style: action.payload.style
      }
    default: return state;
  }
};

export default subNavigationReducer;