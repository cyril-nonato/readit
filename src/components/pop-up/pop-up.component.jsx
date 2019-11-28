import React from 'react'
import ThumbsUpLogo from '../../assets/thumbs-up.svg'
import ThumbsDownLogo from '../../assets/thumbs-down.svg'
import * as S from './pop-up.styles'
import { Backdrop } from '../backdrop/backdrop.styles'

const PopUp = ({ success, failure, clear, checkPopUp }) => {

  if (!checkPopUp) {
    return null;
  }

  return (
    <S.Container>
      <Backdrop onClick={clear} />
      <S.PopUpContainer onClick={clear}>
        <S.BorderLeft success={success} failure={failure} />
        <S.ContentContainer success={success} failure={failure}>
          <S.IconContainer success={success} failure={failure}>
            {
              success &&
              <S.Icon src={ThumbsUpLogo} />
            }
            {
              failure &&
              <S.Icon src={ThumbsDownLogo} />
            }
          </S.IconContainer>
          {
            success &&
            <S.Span>{success}</S.Span>
          }
          {
            failure &&
            <S.Span>{failure}</S.Span>
          }
        </S.ContentContainer>
      </S.PopUpContainer>
    </S.Container>

  );
}

export default React.memo(PopUp);