import React, { useState } from 'react'

import * as S from '../sign-in-sign-up-styles/styles'
import * as D from '../create-post/create-post.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import FormArea from '../form-area/form-area.component';

const CreateSubReadit = ({ 
  onCreateSubReaditRequest 
}) => {

  const startingData = {
    name: '',
    icon: '',
    background: '',
    text: '',
  }
  
  const [details, setDetails] = useState(startingData);

  const handleChange = e => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreateSubReaditRequest(details);
  };

  return (
    <D.Container>
      <S.SideImg />
      <S.Form onSubmit={handleSubmit}>
        <D.H3>Create a Sub-readit</D.H3>
        <FormInput value={details.name} onChange={handleChange} name='name' label='Sub-readit Name' type='input' />
        <FormInput value={details.icon} onChange={handleChange} name='icon' label='Icon (Link)' type='input' />
        <FormInput value={details.background} onChange={handleChange} name='background' label='Backgroud (Link)' type='input' />
        <FormArea value={details.text} onChange={handleChange} name='text' label='Summary' />
        <CustomButton type='submit'>Submit</CustomButton>
        <S.Span>Go to Homepage? <S.Anchor to='/'>Home</S.Anchor></S.Span>
      </S.Form>
    </D.Container>
  );
}

export default CreateSubReadit;