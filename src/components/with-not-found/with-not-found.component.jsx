import React from 'react';
import NotFound from '../not-found/not-found.component';

const WithNotFound = WrappedComponent => ({error, ...otherProps}) => {

  if(error) {
    return <NotFound />;
  }

  return ( 
    <WrappedComponent {...otherProps} />
   );
}
 
export default WithNotFound;