import React, { useEffect } from 'react'

import * as S from './user-posts-page.styles'
import PostsContainer from '../../components/posts/posts.container';
import SubReaditsContainer from '../../components/sub-readits/sub-readits.container';
import SubNavigationContainer from '../../components/sub-navigation/sub-navigation.container';

const UserPostsPage = ({
  onSubReaditListsRequest,
  onPostsFilterByUsername,
  selectSubReaditLists,
  loadingPosts,
  loadingSubs,
  onPostsCancelRequest,
  onSubReaditCancelRequest,
  selectPostsFilteredPosts,
}) => {

  useEffect(() => {
    if(!selectPostsFilteredPosts) {
      onPostsFilterByUsername();
    }
  }, [onPostsFilterByUsername, selectPostsFilteredPosts]);

  useEffect(() => {
    if (!selectSubReaditLists) {
      onSubReaditListsRequest()
    }

  }, [onSubReaditListsRequest, selectSubReaditLists]);

  useEffect(() => {
    return () => {
      onPostsCancelRequest();
      onSubReaditCancelRequest();
    }
  }, [onPostsCancelRequest, onSubReaditCancelRequest]);

  return (
    <S.Container>
      <SubNavigationContainer />
      <S.H2>Your Posts</S.H2>
      <S.Grid>
        <S.Posts>
          <PostsContainer posts={selectPostsFilteredPosts} loading={loadingPosts} />
        </S.Posts>
        <S.Subs>
          <SubReaditsContainer lists={selectSubReaditLists} loading={loadingSubs} />
        </S.Subs>
      </S.Grid>
    </S.Container>
  );
}

export default UserPostsPage;