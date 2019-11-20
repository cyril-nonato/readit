import React, { useEffect } from 'react'

import * as S from './home-page.styles'
import PostsContainer from '../../components/posts/posts.container';
import SubReaditsContainer from '../../components/sub-readits/sub-readits.container';
import SubReadits from '../../components/sub-readits/sub-readits.component';

const HomePage = ({ 
  onSubreaditListsRequest, 
  onPostsRequest, 
  selectSubReaditLists, 
  selectPostsAllPosts, 
  loadingPosts, 
  loadingSubs, 
  match 
}) => {
  console.log('ye');
  
  useEffect(() => {
    if (!selectPostsAllPosts) {
      onPostsRequest(match.params.homeParams);
    }
  }, [onPostsRequest, selectPostsAllPosts, match]);

  useEffect(() => {
    if (!selectSubReaditLists) {
      onSubreaditListsRequest()
    }

  }, [onSubreaditListsRequest, selectSubReaditLists]);
  console.log(loadingPosts);
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
        <SubReaditsContainer loading={loadingSubs} lists={selectSubReaditLists} />
      </S.Grid>

    </S.Container>
  );
}

export default HomePage;