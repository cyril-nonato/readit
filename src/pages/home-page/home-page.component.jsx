import React, { useEffect } from 'react'

import * as S from './home-page.styles'
import PostsContainer from '../../components/posts/posts.container';
import SubReaditsContainer from '../../components/sub-readits/sub-readits.container';
import SubNavigationContainer from '../../components/sub-navigation/sub-navigation.container';

const HomePage = ({
  onSubReaditListsRequest,
  onPostsRequest,
  selectSubReaditLists,
  selectPostsAllPosts,
  loadingPosts,
  loadingSubs,
  onPostsCancelRequest,
  onSubReaditCancelRequest,
  match: { params: { homeParams } },
}) => {

  useEffect(() => {
    onPostsRequest(homeParams);

  }, [onPostsRequest, selectPostsAllPosts, homeParams]);

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
      <S.Grid>
        <S.Posts>
          <PostsContainer posts={selectPostsAllPosts} loading={loadingPosts} />
        </S.Posts>
        <S.Subs>
          <SubReaditsContainer lists={selectSubReaditLists} loading={loadingSubs} />
        </S.Subs>
      </S.Grid>
    </S.Container>
  );
}

export default HomePage;