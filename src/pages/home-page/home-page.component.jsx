import React, { useEffect } from 'react'

import * as S from './home-page.styles'
import PostsContainer from '../../components/posts/posts.container';
import CommunitiesContainer from '../../components/communities/communities.container';

const HomePage = ({ onPostsRequest, selectPostsAllPosts, loading }) => {

  useEffect(() => {
    onPostsRequest();
  }, [onPostsRequest]);

  return (
    <S.Container>
      <S.SubNav>
        Hello
      </S.SubNav>
      <S.Grid>
        <PostsContainer posts={selectPostsAllPosts} loading={loading} />
        <CommunitiesContainer />
      </S.Grid>

    </S.Container>
  );
}

export default HomePage;