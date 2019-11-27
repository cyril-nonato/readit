import {theme1} from '../../theme/theme'
import actionTypes from './theme.types'

const INITIAL_STATE = {
  style: theme1
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_THEME:
      return {
        style: action.payload.style
      }
    default: return state
  }
};

export default themeReducer;