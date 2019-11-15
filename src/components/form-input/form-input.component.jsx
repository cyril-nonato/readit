import React from 'react'

import * as S from './form-input.styles';

const FormInput = ({ value, name, type, label, onChange }) => {

  return (
    <S.Container>
      <S.Input value={value} required name={name} onChange={onChange} type={type} />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}

export default FormInput;