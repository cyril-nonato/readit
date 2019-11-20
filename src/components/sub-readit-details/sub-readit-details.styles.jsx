import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Background = styled.div`
  height: 300px;
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  width: 100vw;
  grid-area: bg;
  position: relative;
  overflow: hidden;
`;

export const Icon = styled.img`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;

`;

export const Name = styled.h2`
  letter-spacing: 1px;
  color: ${props => props.theme.primary};
`;

export const BgDetails = styled.div`
  position: absolute;
  top: 30%;
  left: 5rem;
  display: flex;
  align-items: center;

  ${Name} {
    color: ${props => props.theme.primary};
    font-size: 2rem;
  }

  ${Icon} {
    border: 2px solid ${props => props.theme.primary};
    margin-right: 2rem;
  }
`;

export const Content = styled.div`
  background-color: ${props => props.theme.primary};
  height: 320px;
  grid-area: subReaditContent;
  margin-top: 5rem;
  margin-right: 5rem;
  border-radius: 5px;

`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
`

export const Community = styled.div`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 1rem 1rem;
  font-weight: bolder;
  overflow: hidden;
`;


export const Title = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  ${Name} {
    color: ${props => props.theme.quinary};
    margin-left: 1rem;
    font-size: 1.6rem;

  }


`;

export const Text = styled.p`
  padding: 1rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
`
