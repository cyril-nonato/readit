import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import CreatePostContainer from '../../components/create-post/create-post.container';

const CreatePostPage = ({ selectAuthUserCreds,selectSubReaditLists, onSubReaditListsRequest }) => {

  useEffect(() => {
    if(!selectSubReaditLists) {
      onSubReaditListsRequest()
    }
  }, [selectSubReaditLists, onSubReaditListsRequest]);

  if(!selectAuthUserCreds) {
    return <Redirect to='/' />
  }

  return (
    <CreatePostContainer lists={selectSubReaditLists} />
  );
}

export default CreatePostPage;