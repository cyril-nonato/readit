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

export const selectCrudPostSuccess = createSelector(
  [selectCrudPost],
  crudPost => crudPost.success
);

export const selectCrudPostFailure = createSelector(
  [selectCrudPost],
  crudPost => crudPost.failure
);

export const selectCrudPostPopUp = createSelector(
  [selectCrudPost],
  crudPost => crudPost.popUp 
);

export const selectCrudPostCreatePostData = createSelector(
  [selectCrudPost],
  crudPost => crudPost.createPostData 
);