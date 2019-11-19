import styled from 'styled-components'



export const Input = styled.div`
  border: .5px solid ${props => props.theme.input.border};
  padding: 1.5rem;
  display: inline-block;
  width: inherit;
  font-family: inherit;
  border-radius: 5px;
`;



export const ArrowDownIcon = styled.div`
  width: 20px;
  height: 10px;
  clip-path: polygon(0 0, 47% 100%, 100% 0);
  background-color: ${props => props.theme.quarternary};
  position: absolute;
  z-index: 5;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  
`;

export const Container = styled.div`
  width: 60%;
  position: relative;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 45%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 30%;
  }

  ${Input} {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${Input},
  &:focus ${Input} {
    border: .5px solid ${props => props.theme.secondary};
  }
`;


