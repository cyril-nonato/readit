import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Side from '../../assets/side.jpg'

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const PostIcon = styled.span`
  height: 20px;
  width: 25px;
  clip-path: polygon(22% 95%, 9% 100%, 3% 96%, 0 88%, 0 0, 10% 0, 37% 0, 71% 0, 80% 3%, 88% 6%, 96% 10%, 100% 16%, 100% 78%, 95% 85%, 67% 85%, 46% 85%, 32% 88%);
  background-color: ${props => props.theme.secondary};
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    display: block;
    height: 1.5px;
    width: 14px;
    position: absolute;
    z-index: 1;
    top: 20%;
    left: 15%;
    background-color: ${props => props.theme.primary};
  }

  &:after {
    content: '';
    display: block;
    height: 1.5px;
    width: 14px;
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 15%;
    background-color: ${props => props.theme.primary};
  }
`;

export const LinkIconBottom = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%; 
  background-color: ${props => props.theme.secondary};
  position: absolute;
  bottom: -15px;
  right: 5px;

  &:before {  
    content: '';
    height: 80%;
    width: 80%;
    border-radius: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: ${props => props.theme.primary};
  }
`;

export const LinkIconTop = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%; 
  background-color: ${props => props.theme.secondary};
  position: absolute;
  top: -15px;
  right: -5px;
  z-index: 2;

  &:before {  
    content: '';
    height: 80%;
    width: 80%;
    border-radius: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: ${props => props.theme.primary};
  }
`;

export const LinkIconContainer = styled.div`
  position: relative;
`

export const Text = styled.span`
  padding-left: 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.tertiary};
  
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50px;

  


`;
