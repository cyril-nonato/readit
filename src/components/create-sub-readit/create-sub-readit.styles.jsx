import styled from 'styled-components'
import { Form } from '../sign-in-sign-up-styles/styles'

export const Container = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  background: ${props => props.theme.primary};
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 1.25fr 8fr;
  }

  ${Form} {
      input,
      textarea {
      width: 100%;
      margin-bottom: 1rem;
    }

    @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
      input,
      textarea {
        width: 70%;
      }
    }

    @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
      input,
      textarea {
        width: 40%;
      }
    }
  }
`;

export const H3 = styled.h3`

`;