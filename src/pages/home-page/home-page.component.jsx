import React, { useEffect } from 'react'

import * as S from './home-page.styles'
import PostsContainer from '../../components/posts/posts.container';

const HomePage = ({onPostsRequest, selectPostsAllPosts, loading}) => {
  
  useEffect(() => {
    onPostsRequest();
  }, [onPostsRequest]);

  return (
    <S.Container>
      <S.SubNav>
        Hello
      </S.SubNav>
      <PostsContainer posts={selectPostsAllPosts} loading={loading} />
    </S.Container>
  );
}

export default HomePage;