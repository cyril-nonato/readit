import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.article`
  margin: 5rem 0 3rem 0;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  grid-template-areas:
    "bg"
    "post";

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    grid-template-columns: 7fr 3fr;
    grid-template-areas:
    "bg bg"
    "post subReadit";
    gap: 1rem;
  }

`;

export const Form = styled.form`
  width: 90%;
  margin: auto;

  label {
    text-transform: none;
    font-size: 1.4rem;
  }

  button {

  }
`;

export const Comments = styled.ul`
  list-style: none;
  border-radius: 5px;
  width: 90%;
  margin: 2rem auto 2rem auto;
`

export const PostContainer = styled.div`
  grid-area: post;
  position: relative;
  width: 95%;
  margin: 2rem auto;
  background-color: ${props => props.theme.primary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    margin: 5rem auto 2rem auto;
  }
`;

export const SubReaditContainer = styled.div`
  grid-area: subReadit;
  display: none;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    display: block;
  }
`;

export const Content = styled.div`
  background-color: ${props => props.theme.primary};
  height: 320px;
  margin-top: 5rem;
  margin-right: 5rem;
  border-radius: 5px;
  display: none;
  grid-area: subReaditContent;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    display: block;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
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

export const Icon = styled.img`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
`;

export const Name = styled.h2`
  letter-spacing: 1px;
  color: ${props => props.theme.primary};
`;

export const Title = styled(Link)`
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

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  padding: .75rem;
  position: absolute;
  z-index: 5;
  top: 10px;
  right: 0;
  color: ${props => props.theme.tertiary};
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.secondary};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    top: 0;
  }
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  
`;


export const EditIcon = styled.div`
  background-color: ${props => props.theme.tertiary};
  clip-path: polygon(73% 0, 100% 24%, 25% 100%, 0 100%, 0 73%);
  height: 15px;
  width: 15px;
  display: inline-block;
`;

export const Edit = styled(Link)`
  margin-left: 5px;
  position: absolute;
  top: 12.5px;
  right: 30px;
  padding: .75rem;
  position: absolute;
  z-index: 5;

  &:hover ${EditIcon} {
    background-color: ${props => props.theme.secondary};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    top: 2.5px;
  }
`;
