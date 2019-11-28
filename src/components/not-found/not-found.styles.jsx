import styled from 'styled-components'

export const Container = styled.div`
  height: 80vh;
  margin-top: 10rem;
`;

export const BackgroundImage = styled.div`
  height: 60%;
  width: 80%;
  margin: auto;
  background-image: url(https://www.redditstatic.com/reddit404c.png);
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    width: 50%;
  }
`;

export const Message = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
  color: ${props => props.theme.quinary};
`;

export const AdditionalMessage = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: ${props => props.theme.quinary};
`;