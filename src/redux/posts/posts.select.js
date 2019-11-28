import {createSelector} from 'reselect'

const selectPosts = state => state.posts;

export const selectPostsAllPosts = createSelector(
  [selectPosts],
  posts => posts.allPosts
);

export const selectPostsAllPostsIsLoading = createSelector(
  [selectPosts],
  posts => !!posts.allPosts
);

export const selectPostsFilteredPosts = createSelector(
  [selectPosts],
  posts => posts.filteredPosts
);

export const selectPostsFilteredPostsIsLoading = createSelector(
  [selectPostsFilteredPosts],
  filteredPosts => !!filteredPosts
);

export const selectPostsFailure = createSelector(
  [selectPosts],
  posts => !!posts.failure
);