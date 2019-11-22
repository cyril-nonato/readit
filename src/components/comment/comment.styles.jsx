import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.primary};
`;

export const NameAndTime = styled.div`
  padding: 0 1rem;
  font-size: 1.3rem;
  color: ${props => props.theme.tertiary};
`;

export const Name = styled.span`
`;

export const Time = styled.span`
  padding-left: 1rem;
`;

export const Comment = styled.p`
  padding: 1rem;
  font-size: 1.4rem;
`