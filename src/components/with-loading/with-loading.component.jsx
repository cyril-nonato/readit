import React from 'react';

const WithLoading = WrappedComponent => ({loading, ...otherProps}) => {

  if(loading) {
    return null;
  }

  return ( 
    <WrappedComponent {...otherProps} />
   );
}
 
export default WithLoading;