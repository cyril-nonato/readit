import styled from 'styled-components'

export const Icon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${props => props.icon});
  background-size: cover;
  border-radius: 50%;
`;

export const Name = styled.span`
  padding-left: 1rem;
  font-size: 1.4rem;
  color: ${props => props.theme.text};
`;

export const Input = styled.div`
  border: .5px solid ${props => props.theme.input.border};
  display: flex;
  align-items: center;
  width: inherit;
  font-family: inherit;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 3.5rem;
  margin-bottom: 2rem;
  padding: .5rem;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Triangle = styled.div`
  width: 20px;
  height: 10px;
  clip-path: polygon(0 0, 47% 100%, 100% 0);
  background-color: ${props => props.theme.tertiary};
  position: absolute;
  z-index: 5;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  
`;

export const Select = styled.div`
  width: 100%;
  position: relative;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 40%;
  }

  ${Input} {
    width: 100%;
  }

  &:hover ${Input},
  &:focus ${Input} {
    border: .5px solid ${props => props.theme.secondary};
  }
`;


export const Lists = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  z-index: 10;
  top: 3.5rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: .5px solid ${props => props.theme.input.border};
  border-right: .5px solid ${props => props.theme.input.border};
  border-bottom: .5px solid ${props => props.theme.input.border};
  background-color: ${props => props.theme.primary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    width: 60%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 40%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 60%;
  position: relative;
`;

