import actionTypes from "./sub-navigation.types"

export const selectPostStyle = (style) => ({
  type: actionTypes.SELECT_POST_STYLE,
  payload: { style }
})