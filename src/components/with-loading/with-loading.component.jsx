import React from 'react';

const WithLoading = WrappedComponent => ({loading, ...otherProps}) => {
  console.log(loading);
  if(loading) {
    return null;
  }

  return ( 
    <WrappedComponent {...otherProps} />
   );
}
 
export default WithLoading;