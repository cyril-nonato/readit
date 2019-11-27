import React from 'react'

import * as S from './posts.styles'
import PostCard from '../post-card/post-card.component';
import PostClassic from '../post-classic/post-classic.component';
import PostCompact from '../post-compact/post-compact.component.jsx';

const Posts = ({ posts, selectSubNavigationStyle }) => {
  let postsStyle;

  switch (selectSubNavigationStyle) {
    case 'card':
      postsStyle = posts.map(post => <PostCard type={selectSubNavigationStyle} isLink={true} key={post.id} post={post} />)
      break;
    case 'classic':
      postsStyle = posts.map(post => <PostClassic type={selectSubNavigationStyle} isLink={true} key={post.id} post={post} />)
      break;
    case 'compact':
      postsStyle = posts.map(post => <PostCompact type={selectSubNavigationStyle} isLink={true} key={post.id} post={post} />)
      break;
    default: return null;
  }
  
  return (
    <S.List>
      {
        postsStyle
      }
    </S.List>
  );
}

export default Posts;