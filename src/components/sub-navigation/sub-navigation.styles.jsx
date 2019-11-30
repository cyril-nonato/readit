import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 1rem;
  margin-top: 51px;
  display: flex;
`;

export const ViewContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    margin-left: 3rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    margin-left: 5rem;
  }
`;

export const ViewText = styled.span`
  font-size: 1.1rem;
  text-transform: uppercase;
  color: ${props => props.theme.tertiary};
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.tertiary};
`;

export const Text = styled.span`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  display: none;
  background-color: ${props => props.theme.quinary};
  color: ${props => props.theme.primary};
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  z-index: 30;
`;

const ContainerStyles = css`
  width: 20px;
  height: 20px;
  display: grid;
  gap: 1px;
  margin-left: 1rem;
  position: relative;

  ${Box} {

    &:first-child {
      margin-bottom: 1px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${Text} {
    display: block;
  }

  &:hover ${Box} {
    background-color: ${props => props.theme.secondary};
  }
`;

const activeStyle = css`
  ${Box} {
    background-color: ${props => props.theme.secondary};
  }
`;

const activeCard = props => {
  if (props.type === 'card') {
    return activeStyle;
  }
}

const activeClassic = props => {
  if (props.type === 'classic') {
    return activeStyle;
  }
}

const activeCompact = props => {
  if (props.type === 'compact') {
    return activeStyle;
  }
}

export const Card = styled.div`
  ${ContainerStyles};
  grid-template-rows: 1fr 1fr;

  ${activeCard};
`;

export const Classic = styled.div`
  ${ContainerStyles};
  grid-template-rows: 1fr 1fr 1fr;

  ${activeClassic};
`;

export const Compact = styled.div`
  ${ContainerStyles};
  grid-template-rows: 1fr 1fr 1fr 1fr;

  ${activeCompact};
`;

export const SubReaditContainer = styled.div`
  margin-left: 2rem;
  position: relative;
`;

export const SelectSubReadit = styled.div`
  padding: .5rem;
  border: 1px solid ${props => props.theme.quarternary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }
`;

export const SelectSubReaditText = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
  color: ${props => props.theme.tertiary};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    font-size: 1.4rem;
  }
`;

export const SelectSubReaditTriangle = styled.div`
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  width: 20px;
  height: 10px;
  background-color: ${props => props.theme.quarternary};
`;

export const SubReaditList = styled.ul`
  list-style: none;
  position: absolute;
  left: 0;
  top: 3rem;
  z-index: 20;
  background-color: ${props => props.theme.primary};
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
`;


export const SubReaditLink = styled(Link)`
  color: ${props => props.theme.tertiary};
`;

export const SubReaditItem = styled.li`
  display: flex;
  padding: .5rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.tablet}) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    font-size: 1.4rem;
  }

  &:hover {
    background-color: ${props => props.theme.secondary};
  }

  &:hover ${SubReaditLink} {
    color: ${props => props.theme.primary};
  }
`;

export const SubReaditIcon = styled.img`
  height: 15px;
  width: 15px;
  border-radius: 50%;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.windows}) {
    height: 20px;
    width: 20px;
  }

`
