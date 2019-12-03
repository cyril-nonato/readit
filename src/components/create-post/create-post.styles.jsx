import styled, { css } from 'styled-components'

import { Form } from '../sign-in-sign-up-styles/styles'

export const mediaWidthSize = css`
  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 40%;
  }
`;

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
  padding-bottom: 5px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-size: 1.8rem;
  color: ${props => props.theme.tertiary};
  border-bottom: 1px solid ${props => props.theme.quarternary};
  ${mediaWidthSize};
`;

export const Span = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.tertiary};
  display: inline-block;
  margin-bottom: 1rem;
`

const activePost = css`
  border-bottom: 2px solid ${props => props.theme.secondary};
`;

const linkPost = css`
  border-bottom: 2px solid ${props => props.theme.secondary};
`;

const checkActiveLink = props => {
  if (props.active === 'link') {
    return linkPost
  }
}

const checkActivePost = props => {
  if (props.active === 'post') {
    return activePost;
  }
  return null;
}

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
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.theme.tertiary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    font-size: 1.6rem;
  }
  
`;

const LinkPostContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  border: 1px solid ${props => props.theme.quarternary};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.quarternary};
  }
`

export const LinkContainer = styled.div`
  ${LinkPostContainerStyles};
`

export const PostContainer = styled.div`
  ${LinkPostContainerStyles};
`


export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50px;

  ${PostContainer} {
    ${checkActivePost};
  }

  ${LinkContainer} {
    ${checkActiveLink};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 40%;
  }
`;
