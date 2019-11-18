import React from 'react'
import { Redirect } from 'react-router-dom'
import CreatePostContainer from '../../components/create-post/create-post.container';

const CreatePostPage = ({ selectAuthUserCreds }) => {
  
  // if(!selectAuthUserCreds) {
  //   return <Redirect to='/' />
  // }

  return (
    <CreatePostContainer />
  );
}

export default CreatePostPage;