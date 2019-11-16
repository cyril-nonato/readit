import React, { useEffect } from 'react'
import Post from '../post/post.component';

const Posts = ({ posts }) => {

  console.log(posts);
  return (
    posts.map(post => <Post key={post.id} post={post} />)
  );
}

export default Posts;