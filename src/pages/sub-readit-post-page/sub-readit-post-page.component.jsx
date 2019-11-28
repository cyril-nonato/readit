import React, { useEffect } from 'react'
import SubReaditPostContainer from '../../components/sub-readit-post/sub-readit-post.container';

const SubReaditPostPage = ({ 
  match: {params: {subReadit, id}}, 
  onReadPostRequest, 
  onSubReaditRequest,
  onCrudCancelRequest
}) => {

  // Query single post
  useEffect(() => {
    onReadPostRequest(subReadit, id)
  }, [onReadPostRequest, subReadit, id]);

  // Query single subReadit
  useEffect(() => {
    onSubReaditRequest(subReadit);
  }, [onSubReaditRequest, subReadit]);

  // Cancels listener to live changes in post
  useEffect(() => {
    return () => {
      onCrudCancelRequest()
    }
  }, [onCrudCancelRequest])

  return (
    <SubReaditPostContainer />
  );
}

export default SubReaditPostPage;