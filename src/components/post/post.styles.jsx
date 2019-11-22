import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'


export const Item = styled.li`
  padding: .5rem 1rem .25rem 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  max-height: 42rem;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-auto-rows: auto;
  grid-gap: .75rem;
  grid-template-areas: 
    "info info"
    "content content"
    "votes comments";

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 1.5fr 25fr;
    grid-template-areas: 
      "votes info"
      "votes content"
      "votes comments";
  }
`;

export const SubReaditName = styled.span`
  padding-right: .5rem;
  font-weight: bold;
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
  margin-bottom: .75rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const Cover = styled.div`
  height: 32rem;
  width: 100%;
  background: linear-gradient(to bottom, transparent 0%, transparent 80%, white 100%);
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentContainerStyles = css`
  position: relative;
  grid-area: content;

  min-height: auto;
  max-height: 32rem;
  overflow: hidden;
`;

export const ContentContainerLink = styled(Link)`
  ${ContentContainerStyles};
`;

export const ContentContainer = styled.div`
  ${ContentContainerStyles};
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
  margin-left: 1rem;
  font-weight: bold;
`;

export const BackgroundContainer = styled.div`
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

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 150px;
  };



  &:hover {
    cursor: pointer;
  }

  &:hover ${BackgroundContainer} {
    background-color: ${props => props.theme.quarternary};
  }
`;

export const CommentsContainerLink = styled(Link)`
  ${CommentsContainerStyles};
`;

export const CommentsContainer = styled.div`
  ${CommentsContainerLink};
`;