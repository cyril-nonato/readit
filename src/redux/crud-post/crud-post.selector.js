import {createSelector} from 'reselect'

const selectCrudPost = state => state.crudPost;

export const selectCrudPostPost = createSelector(
  [selectCrudPost],
  crudPost => crudPost.post
);

export const selectCrudPostPostIsLoading = createSelector(
  [selectCrudPostPost],
  post => !!post
);