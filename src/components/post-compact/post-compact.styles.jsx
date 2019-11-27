import styled from 'styled-components'

import { CommentsContainerLink, VotesContainer, ImageContainer } from '../post-classic-compact-shared-styles/post-classic-compact.styles'

export const ItemLink = styled.li`
  padding: .5rem 1rem .25rem 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 3fr 1fr 10fr 2fr;
  grid-auto-rows: 2fr 1fr 1.5fr;
  grid-gap: 2.5px;
  grid-template-areas: 
    "votes image content comments"
    "votes image info comments";

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 3fr 1fr 10fr 2fr;
    grid-template-areas: 
      "votes image content comments"
      "votes image info comments";
  }

  &:hover {
    border: 1px solid ${props => props.theme.tertiary};
  }

  ${ImageContainer} {
    justify-self: center;
    align-self: center;
    position: relative;
  }

  ${VotesContainer} {
    flex-direction: row;
    align-items: flex-start;

    div {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  ${CommentsContainerLink} {
    width: 50px;
    justify-self: center;
    align-self: center;

    @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
      width: 50px;
    };
  };

`;



export const LinkIconBottom = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%; 
  background-color: ${props => props.theme.tertiary};
  position: absolute;
  bottom: -10px;
  right: -2px;

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
  background-color: ${props => props.theme.tertiary};
  position: absolute;
  top: -10px;
  right: -12px;
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
