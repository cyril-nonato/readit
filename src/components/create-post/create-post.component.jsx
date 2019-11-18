import React, { useState } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import * as D from './create-post.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { Redirect } from 'react-router-dom'
import FormArea from '../form-area/form-area.component';

const CreatePost = ({ onSignInRequest, selectAuthUserCreds }) => {

  const [postData, setPostData] = useState({
    title: '',
    text: '',
    image: '',
  });

  const handleChange = e => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignInRequest(postData);
  };

  const handleSelectPost = e => {

  }

  return (
    <S.Container>
      <S.SideImg />
      <S.Form onSubmit={handleSubmit}>
        <S.H3>Create Post</S.H3>
        <D.ButtonContainer>
          <D.DivButton>

            <D.PostIcon />
            <D.Text>Post</D.Text>
          </D.DivButton>
          <D.DivButton>
            <D.LinkIconContainer>
              <D.LinkIconBottom />
              <D.LinkIconTop />
            </D.LinkIconContainer>

            <D.Text>Link</D.Text>
          </D.DivButton>
        </D.ButtonContainer>
        <FormInput value={postData.title} onChange={handleChange} name='title' label='title' type='title' />
        <FormArea value={postData.text} onChange={handleChange} name='text' label='content' />
        <CustomButton type='submit'>Sign in</CustomButton>
        <S.Span>New to RedditZilla? <S.Anchor to='/register'>Sign up</S.Anchor></S.Span>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>

    </S.Container>
  );
}

export default CreatePost;