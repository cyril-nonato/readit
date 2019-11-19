import React, { useState } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import * as D from './create-post.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { Redirect } from 'react-router-dom'
import FormArea from '../form-area/form-area.component';
import SelectSubreadit from '../select-subreadit/select-subreadit.component';

const CreatePost = ({ onSignInRequest, selectAuthUserCreds }) => {

  const [postData, setPostData] = useState({
    title: '',
    text: '',
    image: '',
  });

  const [active, setActive] = useState('post');


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
    console.log(e.target.id);
    setActive(e.target.id);
  }

  let formType;
  if (active === 'post') {
    formType = (
      <FormArea value={postData.text} onChange={handleChange} name='text' label='content' />
    )
  } else if (active === 'link') {
    formType = (
      <FormInput value={postData.title} onChange={handleChange} name='link' label='link (include image type)' type='input' />
    )
  }

  return (
    <S.Container>
      <S.SideImg />
      <S.Form onSubmit={handleSubmit}>
        <D.H3>Create a post</D.H3>
        <SelectSubreadit />
        <D.ButtonContainer active={active} onClick={handleSelectPost}>
          <D.PostContainer id='post'>
            <D.PostIcon id='post' />
            <D.Text id='post'>Post</D.Text>
          </D.PostContainer>
          <D.LinkContainer id='link'>
            <D.LinkIconContainer id='link'>
              <D.LinkIconBottom id='link' />
              <D.LinkIconTop id='link' />
            </D.LinkIconContainer>

            <D.Text id='link'>Link</D.Text>
          </D.LinkContainer>
        </D.ButtonContainer>
        <FormInput value={postData.title} onChange={handleChange} name='title' label='title' type='input' />
        {formType}
        <CustomButton type='submit'>Submit</CustomButton>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>

    </S.Container>
  );
}

export default CreatePost;