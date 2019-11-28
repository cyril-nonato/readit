import React from 'react'

import * as S from './not-found.styles'

const NotFound = () => {
  return ( 
    <S.Container>
      <S.BackgroundImage />
      <S.Message>not found</S.Message>
      <S.AdditionalMessage>the page you requested cannot be found</S.AdditionalMessage>
    </S.Container>
   );
}
 
export default NotFound;