import React, { useEffect } from 'react'

import {Redirect} from 'react-router-dom'

const SignOut = ({ selectAuthUserCreds, onSignOutRequest, history }) => {
  useEffect(() => {
    if(selectAuthUserCreds) {
      onSignOutRequest();
      history.push('/login')
    }
  }, [onSignOutRequest, selectAuthUserCreds, history]);

  if(!selectAuthUserCreds) {
    return <Redirect to='/' />
  }

  return null;
}

export default SignOut;