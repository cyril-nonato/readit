import React, { useEffect } from 'react'

import * as S from './home-page.styles'
import PostsContainer from '../../components/posts/posts.container';
import SubReaditsContainer from '../../components/sub-readits/sub-readits.container';

const HomePage = ({ onSubreaditRequest, onPostsRequest, selectSubReaditList, selectPostsAllPosts, loadingPost, loadingSubs, match }) => {
  useEffect(() => {
    if (!selectPostsAllPosts) {
      onPostsRequest(match.params.homeParams);
    }
  }, [onPostsRequest, selectPostsAllPosts, match]);

  useEffect(() => {
    if (!selectSubReaditList) {
      onSubreaditRequest()
    }

  }, [onSubreaditRequest, selectSubReaditList])

  return (
    <S.Container>
      <S.SubNav>
        Hello
      </S.SubNav>
      <S.Grid>
        <S.Posts>
          <PostsContainer posts={selectPostsAllPosts} loading={loadingPost} />
        </S.Posts>
        <S.Subs>
          <SubReaditsContainer lists={selectSubReaditList} loading={loadingSubs} />
        </S.Subs>
      </S.Grid>

    </S.Container>
  );
}

export default HomePage;