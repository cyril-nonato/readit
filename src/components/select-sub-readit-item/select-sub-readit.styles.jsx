import styled from 'styled-components'



export const Name = styled.span`
  font-size: 1.4rem;
  padding-left: 1rem;

  color: ${props => props.theme.quinary};
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;

`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: .5rem;

  &:hover {
    background-color: ${props => props.theme.secondary};
  }

  &:hover ${Name} {
    color: ${props => props.theme.primary};
  }
`;