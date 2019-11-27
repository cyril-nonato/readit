import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'

export const SubReaditName = styled(Link)`
  padding-right: .5rem;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

export const Owner = styled.span`
  color: ${props => props.theme.tertiary};
  padding-right: .5rem;
`;

export const Time = styled.span`
  color: ${props => props.theme.tertiary};
`;

export const InfoContainer = styled.div`
  font-size: 1.2rem;
  min-height: auto;
  max-height: 4rem;
  grid-area: info;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;


const ContentContainerStyles = css`
  position: relative;
  grid-area: content;
  color: ${props => props.theme.text};
  align-self: center;
`;

export const ContentContainerLink = styled(Link)`
  ${ContentContainerStyles};
  max-height: 32rem;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  ${ContentContainerStyles};
  max-height: auto;
`;


export const CommentsIcon = styled.div`
  height: 13px;
  width: 18px;
  background-color: ${props => props.theme.tertiary};
  clip-path: polygon(0 0, 100% 0, 100% 85%, 70% 85%, 50% 100%, 30% 85%, 0 85%);
`;

export const CommentsText = styled.span`
  color: ${props => props.theme.tertiary};
  font-size: 1.2rem;
  margin-left: .5rem;
  font-weight: bold;
`;

export const CommentsHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CommentsContainerStyles = css`
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  grid-area: comments;
  width: 120px;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 150px;
  };

  &:hover {
    cursor: pointer;
  }

  &:hover ${CommentsHover} {
    background-color: ${props => props.theme.quarternary};
  }
`;

export const CommentsContainerLink = styled(Link)`
  ${CommentsContainerStyles};
`;

export const CommentsContainer = styled.div`
  ${CommentsContainerLink};
`;

export const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  padding: 5px;
`;

export const VotesContainer = styled.div`
  grid-area: votes;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const PostIcon = styled.span`
  height: 20px;
  width: 25px;
  clip-path: polygon(22% 95%, 9% 100%, 3% 96%, 0 88%, 0 0, 10% 0, 37% 0, 71% 0, 80% 3%, 88% 6%, 96% 10%, 100% 16%, 100% 78%, 95% 85%, 67% 85%, 46% 85%, 32% 88%);
  background-color: ${props => props.theme.tertiary};
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