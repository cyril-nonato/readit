import React from 'react'

import * as S from './sub-readit.styles'

const SubReadit = ({sub}) => {
  const {icon, id} = sub;
  console.log(icon);
  return (
    <S.Container>
      <S.Icon src={icon} />
      <S.Name>r/{id}</S.Name>
    </S.Container>
  );
}
 
export default SubReadit;