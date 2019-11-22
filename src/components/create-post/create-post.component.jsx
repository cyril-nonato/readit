import React, { useState } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import * as D from './create-post.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import FormArea from '../form-area/form-area.component';
import SelectSubreadit from '../select-sub-readit/select-sub-readit.component';

const CreatePost = ({ 
  onSignInRequest, 
  lists, 
  selectSubReaditSub,
  onCreatePostRequest 
}) => {
  const [postData, setPostData] = useState({
    title: '',
    text: '',
    image: '',
    icon: '',
    subReadit: '',
  });

  // const [selectedSub, setSelectedSub] = useState({selectSubReaditSub});

  const [active, setActive] = useState('post');

  const handleChange = e => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  };

  const handleIconAndId = item => {
    setPostData({
      ...postData,
      subReadit: item.id,
      icon: item.icon
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onCreatePostRequest(postData)
  };

  const handleSelectPost = e => {
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
        <SelectSubreadit handleIconAndId={handleIconAndId} postData={postData} lists={lists} />
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