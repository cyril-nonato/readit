import React, { useState } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import * as D from './update-post.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import FormArea from '../form-area/form-area.component';
import { checkForPostType } from '../utils/checkForPostType';

const UpdatePost = ({
  lists,
  selectSubReaditSub,
  onUpdatePostRequest,
  selectCrudPostPost
}) => {

  const [postData, setPostData] = useState({
    text: '',
    image: '',
    ...selectCrudPostPost
  });

  const type = checkForPostType(postData);

  const [active, setActive] = useState(type);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdatePostRequest({
      ...postData,
      type: active,
      edited: true
    })
  };

  const handleSelectType = e => {
    setActive(e.target.getAttribute('data-id'));
  }

  const handleChange = e => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  };

  let formType;
  if (active === 'post') {
    formType = (
      <FormArea value={postData.text} onChange={handleChange} name='text' label='content' />
    )
  } else if (active === 'link') {
    formType = (
      <FormInput value={postData.image} onChange={handleChange} name='image' label='link (include image type)' type='input' />
    )
  }

  return (
    <D.Container>
      <S.SideImg />
      <S.Form onSubmit={handleSubmit}>
        <D.H3>Update post</D.H3>
        <D.ButtonContainer active={active} onClick={handleSelectType}>

          <D.PostContainer data-id='post'>
            <D.PostIcon data-id='post' />
            <D.Text data-id='post'>Post</D.Text>
          </D.PostContainer>

          <D.LinkContainer data-id='link'>
            <D.LinkIconContainer data-id='link'>
              <D.LinkIconBottom data-id='link' />
              <D.LinkIconTop data-id='link' />
            </D.LinkIconContainer>
            <D.Text data-id='link'>Link</D.Text>

          </D.LinkContainer>
        </D.ButtonContainer>
        <FormInput value={postData.title} onChange={handleChange} name='title' label='title' type='input' />
        {
          formType
        }
        <CustomButton type='submit'>Update</CustomButton>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>
    </D.Container>
  );
}

export default UpdatePost;