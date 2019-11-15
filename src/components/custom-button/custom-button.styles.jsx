import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkButton = styled(Link)`

  &:link,
  &:visited {
    color: white;
    font-weight: bolder;
    background-color: white;
    border: none;
    border-radius: 2px;
    padding: 1rem 1.8rem;
    transition: all .3s ease-in-out;
    font-size: 1.3rem;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    background-color: white;
    color: white;
  }
`;

export const Button = styled.button`
  color: ${props => props.theme.button.text};
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
  
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.button.backgroundHover};
  }
`;