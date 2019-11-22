import React from 'react'

import * as S from './sub-readit.styles'

const SubReadit = ({sub}) => {
  const {icon, id} = sub;
  
  return (
    <S.Anchor to={`/r/${id}`}>
      <S.Icon src={icon} />
      <S.Name>r/{id}</S.Name>
    </S.Anchor>
  );
}
 
export default SubReadit;