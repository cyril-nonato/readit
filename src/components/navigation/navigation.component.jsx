import React, { useState } from 'react'

import * as S from './navigation.styles'
import Dropdown from '../dropdown/dropdown.component';
import CustomButton from '../custom-button/custom-button.component';

const Navigation = ({ selectAuthUserCreds, handleTheme }) => {

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleClick = e => {
    setToggleDropdown(!toggleDropdown);
  };

  const checkForAuth = !selectAuthUserCreds ? (
    <React.Fragment>
      <S.LoginContainer>
        <CustomButton white='true' isLink to='/login'>Login</CustomButton>
      </S.LoginContainer>
      <S.SignUpContainer>
        <CustomButton isLink to='/register'>Sign up</CustomButton>
      </S.SignUpContainer>
    </React.Fragment>
  ) : (
      <S.CreatePostContainer to='/create-post'>
        <S.CreatePostIcon />
        <S.Text>Create</S.Text>
      </S.CreatePostContainer>
    );

  return (
    <S.Navigation selectAuthUserCreds={selectAuthUserCreds}>
      <S.BrandContainer>
        <S.BrandLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Reddit_logo_orange.svg/240px-Reddit_logo_orange.svg.png' />
        <S.BrandText>Readit</S.BrandText>
      </S.BrandContainer>
      <div>&nbsp;</div>
      <S.PopularContainer to='/popular'>
        <S.PopularIcon />
        <S.Text>Popular</S.Text>
      </S.PopularContainer>
      <S.AllContainer to='/all'>
        <S.AllBoxIconSmaller />
        <S.AllArrowIcon />
        <S.AllBoxIconBigger />
        <S.Text>All</S.Text>
      </S.AllContainer>
      {
        checkForAuth
      }
      <S.UserOptions>
        <S.Button type='button' onClick={handleClick}>
          <S.UserLogo src='https://www.redditstatic.com/avatars/avatar_default_19_A5A4A4.png' />
          <S.Triangle />
        </S.Button>
      </S.UserOptions>
      {
        toggleDropdown &&
        <Dropdown handleTheme={handleTheme} selectAuthUserCreds={selectAuthUserCreds} onClick={handleClick} />
      }
    </S.Navigation>
  );
}

export default Navigation;