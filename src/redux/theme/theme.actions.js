import actionTypes from "./theme.types";

export const changeCurrentTheme = (style) => ({
  type: actionTypes.CHANGE_CURRENT_THEME,
  payload: { style }
});