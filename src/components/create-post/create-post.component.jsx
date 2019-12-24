import React, { useState, useEffect } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import * as D from './create-post.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import FormArea from '../form-area/form-area.component'
import SelectSubreadit from '../select-sub-readit/select-sub-readit.component';
import PopUp from '../pop-up/pop-up.component'

const CreatePost = ({ 
  selectSubReaditLists, 
  selectCrudPostSuccess,
  selectCrudPostFailure,
  selectCrudPostPopUp,
  onCrudPostClearPopUp,
  onCreatePostRequest 
}) => {

  const startingData = {
    title: '',
    text: '',
    image: '',
    icon: '',
    subReadit: '',
  }
  
  const [postData, setPostData] = useState(startingData);

  useEffect(() => {
    return () => {
      onCrudPostClearPopUp()
    }
  }, [onCrudPostClearPopUp])
  // Sets the type of the data, link or post
  const [active, setActive] = useState('post');

  const handleChange = e => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    })
  };

  // Shows icon and name of subReadit in the select subReadit
  const handleIconAndId = item => {
    setPostData({
      ...postData,
      subReadit: item.id,
      icon: item.icon
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    onCreatePostRequest({
      ...postData,
      type: active
    });
  };

  const handlePopUp = () => {
    if(selectCrudPostSuccess) {
      setPostData(startingData);
      onCrudPostClearPopUp();
    } else if (selectCrudPostFailure) {
      onCrudPostClearPopUp();   
    }
  }

  // Sets which input to show, link or post
  const handleSelectType = e => {
    setActive(e.target.getAttribute('data-id'));
  }

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
      <PopUp checkPopUp={selectCrudPostPopUp} clear={handlePopUp} success={selectCrudPostSuccess} failure={selectCrudPostFailure} />
      <S.SideImg />
      <S.Form onSubmit={handleSubmit}>
        <D.H3>Create a post</D.H3>
        <D.Span>Select a Sub</D.Span>
        <SelectSubreadit handleIconAndId={handleIconAndId} postData={postData} lists={selectSubReaditLists} />
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
        <CustomButton type='submit'>Submit</CustomButton>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>
    </D.Container>
  );
}

export default CreatePost;