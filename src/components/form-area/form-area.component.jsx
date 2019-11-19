import React from 'react'

import * as S from './form-area.styles';

const FormArea = ({ value, name, type, label, onChange }) => {

  return (
    <S.Container>
      <S.Input rows='10' value={value} required name={name} onChange={onChange} type={type} />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}

export default FormArea;