import React, { useEffect } from 'react'
import PostsContainer from '../../components/posts/posts.container';
import * as S from './sub-readit-posts-page.styles'
import SubReaditDetailsContainer from '../../components/sub-readit-details/sub-readit-details.container';
import SubNavigationContainer from '../../components/sub-navigation/sub-navigation.container';

const SubReaditPostsPage = ({
  onPostsFilterBySubReaditRequest,
  onSubReaditRequest,
  loadingPosts,
  loadingSubs,
  selectPostsFilteredPosts,
  selectSubReaditSub,
  onPostsCancelRequest,
  error,
  selectAuthUserCreds,
  selectSubReaditLists,
  onSubReaditListsRequest,
  match: { params: { subReadit } }
}) => {

  //Filter posts by subReadit
  useEffect(() => {
    onPostsFilterBySubReaditRequest(subReadit);

  }, [onPostsFilterBySubReaditRequest, subReadit]);

  //Query a single subReadit
  useEffect(() => {
    onSubReaditRequest(subReadit)
  }, [onSubReaditRequest, subReadit]);

  // Removes listener to live changes
  useEffect(() => {
    return () => {
      onPostsCancelRequest();
    }
  }, [onPostsCancelRequest]);

  useEffect(() => {
    if (!selectSubReaditLists) {
      onSubReaditListsRequest()
    }

  }, [onSubReaditListsRequest, selectSubReaditLists]);

  return (
    <S.Container>
    <SubNavigationContainer />
      <S.Grid>
        <SubReaditDetailsContainer user={selectAuthUserCreds} sub={selectSubReaditSub} loading={loadingSubs} />
        <S.Posts>
          <S.H3>Posts</S.H3>
          <PostsContainer posts={selectPostsFilteredPosts} loading={loadingPosts} />
        </S.Posts>
      </S.Grid>
    </S.Container>
  );
}

export default SubReaditPostsPage;

