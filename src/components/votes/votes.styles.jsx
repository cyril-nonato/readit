import styled, { css } from 'styled-components'

const arrowStyles = css`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.tertiary};
  clip-path: polygon(28% 100%, 28% 50%, 0 50%, 50% 0, 100% 50%, 70% 50%, 70% 100%);
`;

export const Up = styled.div`
  ${arrowStyles};

  &:hover {
    background-color: ${props => props.theme.vote.up};
    
  }
`;

export const Down = styled.div`
  ${arrowStyles};
  transform: rotateX(180deg);

  &:hover {
    background-color: ${props => props.theme.vote.down};
  }
`;

export const ArrowContainer = styled.div`
  height: 17.5px;
  width: 17.5px;
  padding: 2.5px;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.quarternary};  
  }
  &:hover ${Up} {
    background-color: ${props => props.theme.vote.up};
  }

  &:hover ${Down} {
    background-color: ${props => props.theme.vote.down};
  }
`;

export const VoteValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 .5rem;
`;

export const VotesContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  min-height: auto;
  max-height: 4rem;
  display: flex;
  justify-content: center;
`;