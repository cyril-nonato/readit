import {createSelector} from 'reselect'

const selectSubReadit = state => state.subReadit;

export const selectSubReaditList = createSelector(
  [selectSubReadit],
  selectSubReadit => selectSubReadit.lists
);

export const selectSubReaditListIsLoading = createSelector(
  [selectSubReadit],
  selectSubReadit => !!selectSubReadit.lists
);