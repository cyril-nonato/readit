import React, {useState} from 'react'

import * as S from './dropdown.styles'
import Backdrop from '../backdrop/backdrop.component'

const Dropdown = ({ onClick, selectAuthUserCreds, handleTheme }) => {
  const [type, setType] = useState(true);

  const handleClick = () => {
    setType(!type);
    handleTheme(type);
  }
  
  return (
    <React.Fragment>
      <Backdrop onClick={onClick} />
      <S.Container id='dropdown'>
        <S.OptionText>
          view options
      </S.OptionText>
        <S.List>
          <S.Item onClick={handleClick}>
            <S.Button>
              <S.MoonLogo />
              <S.Text>Night Mode</S.Text>
            </S.Button>
          </S.Item>
          {
            !selectAuthUserCreds &&
            <S.Item>
              <S.Anchor onClick={onClick} to='/login'>
                <S.SignInSignUpContainer>
                  <S.Box />
                  <S.ArrowIn />
                </S.SignInSignUpContainer>
                <S.Text>Sign In / Sign Up</S.Text>
              </S.Anchor>
            </S.Item>
          }
          {
            selectAuthUserCreds &&
            <S.Item>
              <S.Anchor to='/logout'>
                <S.SignInSignUpContainer>
                  <S.Box />
                  <S.ArrowOut />
                </S.SignInSignUpContainer>
                <S.Text>Sign Out</S.Text>
              </S.Anchor>
            </S.Item>
          }
        </S.List>
      </S.Container>
    </React.Fragment>

  );
}

export default Dropdown;