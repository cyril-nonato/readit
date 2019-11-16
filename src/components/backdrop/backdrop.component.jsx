import React from 'react'

import * as S from './backdrop.styles'

const Backdrop = ({onClick}) => {
  return ( 
    <S.Backdrop onClick={onClick} />
   );
}
 
export default Backdrop;