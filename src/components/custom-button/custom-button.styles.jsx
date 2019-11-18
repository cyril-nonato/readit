import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const sharedStyle = css`
  color: ${props => props.theme.primary};
  font-weight: bolder;
  background-color: ${props => props.theme.button.background};
  border: none;
  border-radius: 5px;
  padding: 1rem 5rem;
  transition: all .3s ease-in-out;
  font-size: 1.1rem;
  text-align: center;
  font-family: inherit;
  text-transform: uppercase;
  transition: all .2s ease-in;
  
`;

const customStyle = css`
  &:link,
  &:visited {
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.secondary};
  }

  &:hover {
    background-color: ${props => props.theme.primary};
  }

`;

const checkIsWhite = props => {
  if (props.white) {
    return customStyle;
  }

  return null;
}

export const LinkButton = styled(Link)`

  &:link,
  &:visited {
    ${sharedStyle}
    
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.button.backgroundHover};
  }

  ${checkIsWhite};
`;

export const Button = styled.button`
  ${sharedStyle};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.button.backgroundHover};
  }
`;