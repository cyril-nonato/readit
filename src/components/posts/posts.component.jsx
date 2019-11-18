import React, { useEffect } from 'react'
import Post from '../post/post.component';

import * as S from './posts.styles'

const Posts = ({ posts }) => {

  return (
    <S.List>
      {
        posts.map(post => <Post key={post.id} post={post} />)
      }
    </S.List>
  );
}

export default Posts;