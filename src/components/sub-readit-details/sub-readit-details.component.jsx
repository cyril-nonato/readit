import React from 'react'

import * as S from './sub-readit-details.styles'
import CustomButton from '../custom-button/custom-button.component'

const SubReaditDetails = ({ sub: { background, icon, id, text } }) => {

  return (
    <React.Fragment>
      <S.Background background={background}>
        <S.BgDetails>
          <S.Icon src={icon} />
          <S.Name>r/{id}</S.Name>
        </S.BgDetails>
      </S.Background>
      <S.Content>
        <S.Community>Community Details</S.Community>
        <S.Title>
          <S.Icon src={icon} />
          <S.Name>r/{id}</S.Name>
        </S.Title>
        <S.Text>{text}</S.Text>
        <S.Button>
          <CustomButton isLink to='/create-post'>Create post</CustomButton>
        </S.Button>
      </S.Content>
    </React.Fragment>
  );
}

export default SubReaditDetails;