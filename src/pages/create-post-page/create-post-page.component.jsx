import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import CreatePostContainer from '../../components/create-post/create-post.container';

const CreatePostPage = ({ selectAuthUserCreds,selectSubReaditLists, onSubReaditListsRequest }) => {

  // Gets all subReadit lists
  useEffect(() => {
    if(!selectSubReaditLists) {
      onSubReaditListsRequest()
    }
  }, [selectSubReaditLists, onSubReaditListsRequest]);

  // Check for auth
  if(!selectAuthUserCreds) {
    return <Redirect to='/' />
  }

  return (
    <CreatePostContainer />
  );
}

export default CreatePostPage;