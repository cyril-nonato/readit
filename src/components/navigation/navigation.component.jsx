import React, { useState } from 'react'

import * as S from './navigation.styles'
import Dropdown from '../dropdown/dropdown.component';
import CustomButton from '../custom-button/custom-button.component';

const Navigation = ({ selectAuthUserCreds }) => {

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleClick = e => {
    setToggleDropdown(!toggleDropdown);
  };

  const showsLoginSignUp = !selectAuthUserCreds ? (
    <React.Fragment>
      <S.LoginContainer>
        <CustomButton white='true' isLink to='/login'>Login</CustomButton>
      </S.LoginContainer>
      <S.SignUpContainer>
        <CustomButton isLink to='/register'>Sign up</CustomButton>
      </S.SignUpContainer>
    </React.Fragment>
  ) : null;

  return (
    <S.Navigation>
      <S.Main selectAuthUserCreds={selectAuthUserCreds}>
        <S.BrandContainer>
          <S.BrandLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Reddit_logo_orange.svg/240px-Reddit_logo_orange.svg.png' />
          <S.BrandText>redditzilla</S.BrandText>
        </S.BrandContainer>
        <div>&nbsp;</div>
        <S.PopularContainer>
          <S.PopularIcon />
          <S.Text>Popular</S.Text>
        </S.PopularContainer>
        <S.AllContainer>
          <S.AllBoxIconSmaller />
          <S.AllArrowIcon />
          <S.AllBoxIconBigger />
          <S.Text>All</S.Text>
        </S.AllContainer>
        {
          showsLoginSignUp
        }
        <S.UserOptions>
          <S.Button type='button' onClick={handleClick}>
            <S.UserLogo src='https://www.redditstatic.com/avatars/avatar_default_19_A5A4A4.png' />
            <S.Triangle />
          </S.Button>
        </S.UserOptions>
        {
          toggleDropdown &&
          <Dropdown selectAuthUserCreds={selectAuthUserCreds} onClick={handleClick} />
        }
      </S.Main>
    </S.Navigation>
  );
}

export default Navigation;