import {createSelector} from 'reselect'

const selectTheme = state => state.theme;

export const selectThemeStyle = createSelector(
  [selectTheme],
  theme => theme.style
);
