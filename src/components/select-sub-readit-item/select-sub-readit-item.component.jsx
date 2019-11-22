import React from 'react'

import * as S from './select-sub-readit.styles'

const SelectSubReaditItem = ({ item, handleIconAndId, handleToggle }) => {
  const handeClick = () => {
    handleIconAndId(item);
    handleToggle();
  }
  
  return (
    <S.Item onClick={handeClick}>
      <S.Icon src={item.icon} />
      <S.Name>{item.id}</S.Name>
    </S.Item>
  )
};

export default SelectSubReaditItem;