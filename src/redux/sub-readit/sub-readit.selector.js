import {createSelector} from 'reselect'

const selectSubReadit = state => state.subReadit;

export const selectSubReaditLists = createSelector(
  [selectSubReadit],
  subReadit => subReadit.lists
);

export const selectSubReaditListsIsLoading = createSelector(
  [selectSubReadit],
  selectSubReadit => !!selectSubReadit.lists
);

export const selectSubReaditSub = createSelector(
  [selectSubReadit],
  subReadit => subReadit.sub
);


export const selectSubReaditSubIsLoading = createSelector(
  [selectSubReadit],
  subReadit => !!subReadit.sub
);