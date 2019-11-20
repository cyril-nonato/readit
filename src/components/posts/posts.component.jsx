import React, { useEffect } from 'react'

import * as S from './posts.styles'
import Post from '../post/post.component';

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