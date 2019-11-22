import React, { useEffect } from 'react'
import SubReaditPostContainer from '../../components/sub-readit-post/sub-readit-post.container';

const SubReaditPostPage = ({ 
  match: {params: {subReadit, id}}, 
  onReadPostRequest, 
  onSubReaditRequest,
}) => {

  useEffect(() => {
    onReadPostRequest(subReadit, id)
  }, [onReadPostRequest, subReadit, id]);

  useEffect(() => {
    onSubReaditRequest(subReadit);
  }, [onSubReaditRequest, subReadit]);

  return (
    <SubReaditPostContainer />
  );
}

export default SubReaditPostPage;