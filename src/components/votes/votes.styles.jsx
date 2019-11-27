import styled, { css } from 'styled-components'

const upVote = css`
  background-color: ${props => props.theme.vote.up};
`;

const downVote = css`
  background-color: ${props => props.theme.vote.down};
`;

const checkForUp = props => {
  if(props.checkTypeVote === true) {
    return upVote
  }
  return null;
}

const checkForDown = props => {
  if(props.checkTypeVote === false) {
    return downVote
  }
  return null;
}


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

  ${checkForUp};
`;

export const Down = styled.div`
  ${arrowStyles};
  transform: rotateX(180deg);

  &:hover {
    background-color: ${props => props.theme.vote.down};
  }

  ${checkForDown};
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

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    height: 20px;
    width: 20px;
  }

`;

export const VoteValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 .5rem;
  color: ${props => props.theme.text};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    padding: 0;
    font-size: 1.4rem;
  }

`;
