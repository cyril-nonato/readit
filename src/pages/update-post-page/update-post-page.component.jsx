import React, { useEffect } from 'react'
import UpdatePostContainer from '../../components/update-post/update-post.container';

const UpdatePostPage = ({ 
  match: {params: {subReadit, id}}, 
  onReadPostRequest, 
  selectSubReaditLists,
  onSubReaditListsRequest,
  onCrudCancelRequest
}) => {

  //Query the specific post
  useEffect(() => {
    onReadPostRequest(subReadit, id)
  }, [onReadPostRequest, subReadit, id]);

  useEffect(() => {
    return () => {
      onCrudCancelRequest()
    }
  }, [onCrudCancelRequest])

  return (
    <UpdatePostContainer />
  );
}

export default UpdatePostPage;