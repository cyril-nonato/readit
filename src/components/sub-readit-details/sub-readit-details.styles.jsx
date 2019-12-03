import styled from 'styled-components'

export const Background = styled.div`
  height: 200px;
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  width: 100%;
  grid-area: bg;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    height: 250px;
  }
`;

export const Icon = styled.img`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
`;

export const Name = styled.h4`
  letter-spacing: 1px;
  color: ${props => props.theme.primary};
`;

export const BgDetails = styled.div`
  position: absolute;
  top: 30%;
  left: 5rem;
  display: flex;
  align-items: center;

  ${Name} {
    color: ${props => props.theme.primary};
    font-size: 2rem;
  }

  ${Icon} {
    border: 2px solid ${props => props.theme.primary};
    margin-right: 2rem;
  }
`;

export const ContentContainer = styled.div`
  grid-area: subReaditContent;
  position: relative;
  margin-top: 5rem;
  margin-right: 5rem;
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    display: block;
  }
`;

export const Content = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 5px;
  color: ${props => props.theme.text};
  position: absolute;
  padding-bottom: 2rem;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Community = styled.div`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 1rem 1rem;
  font-weight: bolder;
  overflow: hidden;
`;


export const Title = styled.span`
  display: flex;
  align-items: center;
  padding: 1rem;
  ${Name} {
    color: ${props => props.theme.quinary};
    margin-left: 1rem;
    font-size: 1.6rem;

  }

`;

export const Text = styled.p`
  padding: 1rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;
