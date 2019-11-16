import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
  height: 50px;
  width: 100%;
  border-top: .5px solid ${props => props.theme.posts.subNav.border};
  background-color: ${props => props.theme.secondary};
  padding: 0 3rem;
`;

export const SubNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;