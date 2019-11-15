import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Side from '../../assets/side.jpg'

export const Container = styled.section`
  display: grid;
  width: 100vw;
  grid-template-columns: 100%;
  grid-auto-rows: 100vh;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 1.25fr 8fr;
  }
`;



export const SideImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Side});
  background-size: cover;
  background-position: right;
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    display: block;
  }
`;

export const Form = styled.form`
  align-self: center;
  margin-left: 1.25rem;
  margin-right: 1.25rem;


  div input {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    div input {
    width: 50%;
    }
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    div input {
    min-width: 30%;
    max-width: 32rem;
    }
  }
`;

export const H3 = styled.h3`
  font-size: 1.6rem;
`;

export const Span = styled.span`
  font-size: 1.1rem;
  margin-top: 2rem;
  display: block;
`;

export const Anchor = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
  margin-left: .5rem;
  color: ${props => props.theme.primary}
`