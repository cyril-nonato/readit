import React from 'react';

import * as S from './custom-button.styles';

const CustomButton = ({ onClick, type, children, isLink, to }) => {

  if(isLink) {
    return <S.LinkButton to={to}>
      {children}
    </S.LinkButton>
  }

  return ( 
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default React.memo(CustomButton);