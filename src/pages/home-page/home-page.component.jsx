import React, { useEffect } from 'react'

import * as S from './home-page.styles'
import PostsContainer from '../../components/posts/posts.container';
import SubReaditsContainer from '../../components/sub-readits/sub-readits.container';

const HomePage = ({
  onSubReaditListsRequest,
  onPostsRequest,
  selectSubReaditLists,
  selectPostsAllPosts,
  selectAuthUserCreds,
  loadingPosts,
  loadingSubs,
  onPostsCancelRequest,
  onSubReaditCancelRequest,
}) => {

  useEffect(() => {
    if (!selectPostsAllPosts) {
      onPostsRequest();
    }

  }, [onPostsRequest, selectPostsAllPosts]);

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
  console.log(selectAuthUserCreds);
  return (
    <S.Container>
      <S.SubNav>
        Hello
      </S.SubNav>
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