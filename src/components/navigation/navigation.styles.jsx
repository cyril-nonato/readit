import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'

// Change grid depending if there is a user or not
const gridMain = css`
  grid-template-columns: 1fr 1fr .5fr .5fr .5fr .5fr .25fr;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-template-columns: 1.15fr 5fr .25fr .25fr .25fr .25fr .25fr;
  }
  
`;

const checkSelectAuthUserCreds = props => {
  if (props.selectAuthUserCreds) {
    return gridMain;
  }
  return null;
}

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 2fr .5fr .5fr .5fr;
  grid-template-rows: 50px;
  grid-gap: 1rem;
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.primary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    padding: 0 5rem;
    grid-template-columns: 1.15fr 5fr .25fr 1fr 1fr .5fr;

  }

  ${checkSelectAuthUserCreds};
`;

const SignUpAndLoginStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    &:link,
    &:visited {
      padding: .75rem;
      display: block;
      width: 100%;
    }
  }
`

export const LoginContainer = styled.div`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    display: block;

    ${SignUpAndLoginStyles};
  }
`;

export const SignUpContainer = styled.div`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    display: block;

    ${SignUpAndLoginStyles};
  }
`

export const BrandLogo = styled.img`
  height: 30px;
`;

export const BrandText = styled.span`
  font-size: 1.6rem;
  letter-spacing: 1px;
  display: none;
  color: ${props => props.theme.text};
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    display: block;
  }
`

export const BrandContainer = styled(Link)`
  padding-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    justify-content: space-evenly;
  }
`;

export const UserOptions = styled.div`
  align-self: center;
  justify-self: center;

`;

export const Button = styled.button`
  border: none;
  width: 4.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Triangle = styled.div`
  height: .75rem;
  width: 1.25rem;
  background-color: ${props => props.theme.tertiary};
  clip-path: polygon(0 0, 52% 100%, 100% 0);
`;

export const Text = styled.span`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  display: none;
  background-color: ${props => props.theme.quinary};
  color: ${props => props.theme.primary};
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
`;

export const PopularIcon = styled.div`
  height: 18px;
  width: 15px;
  clip-path: polygon(2% 57%, 50% 0, 100% 55%, 67% 56%, 68% 100%, 35% 100%, 35% 58%);
  background-color: ${props => props.theme.quinary};
`;

const IconsContainerStyles = css`
  padding: .5rem 1rem;
  align-self: center;
  justify-self: center;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.quarternary};
  }

  &:hover ${Text} {
    display: block;
  }
`


export const PopularContainer = styled(Link)`
  ${IconsContainerStyles};

`;


export const AllBoxIconSmaller = styled.div`
  height: 20px;
  width: 8px;
  clip-path: polygon(0 76%, 100% 75%, 100% 100%, 0 100%);
  background-color: ${props => props.theme.quinary};
`;

export const AllBoxIconBigger = styled.div`
  height: 20px;
  width: 8px;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  background-color: ${props => props.theme.quinary};
`;

export const AllArrowIcon = styled.div`
  height: 20px;
  width: 10px;
  clip-path: polygon(0 50%, 48% 9%, 100% 49%, 79% 50%, 80% 100%, 25% 100%, 25% 51%);
  background-color: ${props => props.theme.quinary};
`;

export const AllContainer = styled(Link)`
  ${IconsContainerStyles};
  display: flex;
`;

export const CreatePostIcon = styled.div`
  background-color: ${props => props.theme.quinary};
  clip-path: polygon(73% 0, 100% 24%, 25% 100%, 0 100%, 0 73%);
  height: 20px;
  width: 20px;
`

export const CreatePostContainer = styled(Link)`
  ${IconsContainerStyles};
`;



export const UserLogo = styled.img`
  height: 20px;
`;

export const Sub = styled.div`

`;

export const CurrentUser = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  color: ${props => props.theme.quinary};
`;

export const CurrentUserContainer = styled.div`
  justify-self: center;
  align-self: center;
  position: relative;

  &:hover ${Text} {
    display: block;
  }
`