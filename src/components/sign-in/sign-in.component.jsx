import React, { useState } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { Redirect } from 'react-router-dom'
import PopUp from '../pop-up/pop-up.component'

const SignIn = ({ 
  onSignInRequest, 
  selectAuthUserCreds, 
  selectAuthSuccess, 
  selectAuthFailure, 
  selectAuthPopUp,
  onAuthClearPopUp 
}) => {

  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignInRequest(userCreds);
  };

  if (selectAuthUserCreds) {
    return (
      <Redirect to='/' />
    )
  }

  return (
    <S.Container>
      <S.SideImg />
      <PopUp checkPopUp={selectAuthPopUp} clear={onAuthClearPopUp} success={selectAuthSuccess} failure={selectAuthFailure}  />
      <S.Form onSubmit={handleSubmit}>
        <S.H3>Sign In</S.H3>
        <FormInput value={userCreds.email} onChange={handleChange} name='email' label='email' type='email' />
        <FormInput value={userCreds.password} onChange={handleChange} name='password' label='password' type='password' />
        <CustomButton type='submit'>Sign in</CustomButton>
        <S.Span>New to RedditZilla? <S.Anchor to='/register'>Sign up</S.Anchor></S.Span>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>

    </S.Container>
  );
}

export default SignIn;