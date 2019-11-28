import {createSelector} from 'reselect'

const selectAuth = state => state.auth;

export const selectAuthUserCreds = createSelector(
  [selectAuth],
  auth => auth.userCreds
);

export const selectAuthLoading = createSelector(
  [selectAuth],
  auth => auth.loading
);