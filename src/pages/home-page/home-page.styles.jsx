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

export const Subs = styled.div`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-column: 2 / 3;
    display: block;
  }
`;

export const Posts = styled.div`
  grid-column: 1 / 3;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-column: 1 / 2;
  }

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

  margin: 0 .5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    gap: 2rem;
  }

`;

export const Container = styled.section`

  ${Grid} {
    margin: 2rem 1rem;

    @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
      margin: 5rem;
    }
  }
`;