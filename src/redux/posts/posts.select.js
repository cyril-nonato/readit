import {createSelector} from 'reselect'

const selectPosts = state => state.posts;

export const selectPostsAllPosts = createSelector(
  [selectPosts],
  posts => posts.allPosts
);

export const selectPostsAllPostsIsLoading = createSelector(
  [selectPostsAllPosts],
  allPosts => !!allPosts
)