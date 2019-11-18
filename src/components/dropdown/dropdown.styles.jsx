import styled, {css} from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: absolute;
  display: block;
  height: auto;
  width: 200px;
  background-color: ${props => props.theme.primary};
  top: 5rem;
  right: 0;
  border-radius: 5px;
  overflow: hidden;
  z-index: 10;
  border: 1px solid ${props => props.theme.primary};
`;

export const OptionText = styled.span`
  display: block;
  height: 20px;
  font-weight: bold;
  padding-left: 5px;
  text-transform: uppercase;
  color: ${props => props.theme.tertiary};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px;
  list-style: none;

`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MoonLogo = styled.div`
  height: 10px;
  width: 12px;
  border-radius: 50%; 
  background-color: transparent;
  box-shadow: -5px 0 0 4px ${props => props.theme.tertiary};
  align-self: center;
`;

export const Text = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1.4rem;
  align-self: center;
`;

const buttonLinkStyle = css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 10px 0 20px;
  background: transparent;
  border: none;
  color: ${props => props.theme.quinary};

  &:hover {
    background-color: ${props => props.theme.secondary};
    cursor: pointer;
  }

  &:hover ${Text} {
    color: ${props => props.theme.primary};
  }

`;

export const SignInSignUpContainer = styled.div`
  height: 20px;
  width: 18px;
  position: relative;
  left: -1rem;
  align-self: center;
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.tertiary};
`;

const arrowStyles = css`
  position: absolute;
  top: 25%;
  z-index: 5;
  height: 60%;
  width: 80%;
  translate: translateY(-50%, 0);
  background-color: ${props => props.theme.primary};
`;

export const ArrowIn = styled.div`
  ${arrowStyles};
  left: 0;
  clip-path: polygon(1% 36%, 57% 36%, 48% 4%, 100% 50%, 48% 100%, 58% 64%, 1% 65%);
`;

export const ArrowOut = styled.div`
 ${arrowStyles};
  right: 0;
  clip-path: polygon(52% 1%, 41% 36%, 100% 37%, 100% 66%, 41% 68%, 53% 99%, 0% 50%);
`;


export const Button = styled.div`
  ${buttonLinkStyle};
  font-family: inherit;

  &:hover ${MoonLogo} {
    box-shadow: -5px 0 0 4px ${props => props.theme.primary};
  }
`;

export const Anchor = styled(Link)`
  ${buttonLinkStyle}
  font-weight: bold;

  &:hover ${MoonLogo} {
    box-shadow: -5px 0 0 4px ${props => props.theme.tertiary};
  }

  &:hover ${ArrowIn},
  &:hover ${ArrowOut} {
    background-color: ${props => props.theme.tertiary};
  }

  &:hover ${Box} {
    background-color: ${props => props.theme.primary};
  }
`;

