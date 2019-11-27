import {createSelector} from 'reselect'

const selectSubNavigation = state => state.subNavigation;

export const selectSubNavigationStyle = createSelector(
  [selectSubNavigation],
  subNavigation => subNavigation.style
);
