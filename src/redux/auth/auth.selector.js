import {createSelector} from 'reselect'

const selectAuth = state => state.auth;

export const selectAuthUserCreds = createSelector(
  [selectAuth],
  auth => auth.userCreds
);