import styled from 'styled-components'

export const Posts = styled.div`
  grid-area: posts;
  margin: 0 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    margin-left: 5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "bg bg"
    "posts posts"
  ;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-column-gap: 2rem;
    grid-template-columns: 7fr 3fr;
    grid-template-areas:
      "bg bg"
      "posts subReaditContent"
    ;
  }
`;

export const H3 = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2rem;
  height: 5rem;
  color: ${props => props.theme.quinary};
`;


export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;