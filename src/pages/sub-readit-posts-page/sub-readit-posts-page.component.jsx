import React, { useEffect } from 'react'
import PostsContainer from '../../components/posts/posts.container';
import * as S from './sub-readit-posts-page.styles'
import SubReaditDetailsContainer from '../../components/sub-readit-details/sub-readit-details.container';

const SubReaditPostsPage = ({
  onPostFilterBySubReaditRequest,
  onSubReaditRequest,
  loadingPosts,
  loadingSubs,
  selectPostsFilteredPosts,
  selectSubReaditSub,
  match: { params: { subReadit } }
}) => {

  useEffect(() => {
    onPostFilterBySubReaditRequest(subReadit);
  }, [onPostFilterBySubReaditRequest, subReadit]);

  useEffect(() => {
    onSubReaditRequest(subReadit)
  }, [onSubReaditRequest, subReadit]);

  return (
    <S.Container>
      <S.Grid>
        <SubReaditDetailsContainer sub={selectSubReaditSub} loading={loadingSubs} />
        <S.Posts>
          <S.H3>Posts</S.H3>
          <PostsContainer posts={selectPostsFilteredPosts} loading={loadingPosts} />
        </S.Posts>
      </S.Grid>

    </S.Container>
  );
}

export default SubReaditPostsPage;

