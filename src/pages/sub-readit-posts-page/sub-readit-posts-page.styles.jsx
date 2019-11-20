import styled from 'styled-components'

export const Subs = styled.div`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-column: 2 / 3;
    display: block;
  }
`;

export const Posts = styled.div`
  grid-area: posts;
  margin: 0 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    margin-left: 5rem;
  }
`;

export const SubReaditDetails = styled.div`
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-column: 2 / 3;
    display: block;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-areas:
    "bg"
    "posts"
  ;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    box-sizing: border-box;
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
`;


export const Container = styled.div`
  margin-top: 50px;
`;