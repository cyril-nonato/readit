import React from 'react';

import * as S from './custom-button.styles';

const CustomButton = ({ onClick, white, type, children, isLink, to }) => {

  if(isLink) {
    return <S.LinkButton white={white} to={to}>
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