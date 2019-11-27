import React, { useEffect } from 'react'

const UpdatePostPage = ({ 
  match: {params: {subReadit, id}}, 
  onReadPostRequest, 
  selectSubReaditLists,
  onSubReaditListsRequest,
  onCrudCancelRequest
}) => {

  useEffect(() => {
    onReadPostRequest(subReadit, id)
  }, [onReadPostRequest, subReadit, id]);

  useEffect(() => {
    if (!selectSubReaditLists) {
      onSubReaditListsRequest()
    }

  }, [onSubReaditListsRequest, selectSubReaditLists]);

  useEffect(() => {
    return () => {
      onCrudCancelRequest()
    }
  }, [onCrudCancelRequest])

  return (
    <div></div>
  );
}

export default UpdatePostPage;