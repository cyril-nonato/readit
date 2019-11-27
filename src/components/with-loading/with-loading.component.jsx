import React from 'react';
import Loading from '../loading/loading.component';

const WithLoading = WrappedComponent => ({loading, ...otherProps}) => {

  if(loading) {
    return <Loading />;
  }

  return ( 
    <WrappedComponent {...otherProps} />
   );
}
 
export default WithLoading;