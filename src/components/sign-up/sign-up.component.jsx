import React, {useState} from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { Redirect } from 'react-router-dom'


const SignUp = ({onSignUpRequest, selectAuthUserCreds}) => {

  const [userCreds, setUserCreds] = useState({
    email: '',
    full_name: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignUpRequest(userCreds);
  };

  if (selectAuthUserCreds) {
    return (
      <Redirect to='/' />
    )
  }

  return ( 
    <S.Container>
      <S.SideImg />
      <S.Form onSubmit={handleSubmit}>
        <S.H3>Sign up</S.H3>
        <FormInput value={userCreds.email} onChange={handleChange} name='email' label='email' type='email' />
        <FormInput value={userCreds.full_name} onChange={handleChange} name='full_name' label='full name' type='text' />
        <FormInput value={userCreds.password} onChange={handleChange} name='password' label='password' type='password' />
        <FormInput value={userCreds.confirm_password} onChange={handleChange} name='confirm_password' label='confirm password' type='password' />
        <CustomButton type='submit'>Sign up</CustomButton>
        <S.Span>Have an account? <S.Anchor to='/login'>Sign in</S.Anchor></S.Span>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>
    </S.Container>
   );
}
 
export default SignUp;