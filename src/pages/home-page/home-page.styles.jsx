import styled from 'styled-components'

export const SubNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  margin-top: 50px;
  height: 50px;
  width: 100%;
  border-top: .5px solid ${props => props.theme.quarternary};
  padding: 0 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 .5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.widnows}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Container = styled.div`

  ${Grid} {
    margin-top: 5rem;
  }
`;