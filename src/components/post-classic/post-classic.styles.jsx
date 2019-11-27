import styled from 'styled-components'

import { ImageContainer } from '../post-classic-compact-shared-styles/post-classic-compact.styles'



export const ItemLink = styled.li`
  padding: .5rem 1rem .25rem 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 3fr 5fr;
  grid-auto-rows: 2fr 1fr 1.5fr;
  grid-gap: 2.5px;
  grid-template-areas: 
      "votes image content"
      "votes image info"
      "votes image comments";

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 1fr 2fr 10fr;
    grid-template-areas: 
      "votes image content"
      "votes image info"
      "votes image comments";
  }

  &:hover {
    border: 1px solid ${props => props.theme.tertiary};
  }

  ${ImageContainer} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
