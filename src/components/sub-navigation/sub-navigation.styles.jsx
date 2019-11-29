import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 1rem;
  margin-top: 51px;
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
  if(props.type === 'card') {
    return activeStyle;
  }
}

const activeClassic = props => {
  if(props.type === 'classic') {
    return activeStyle;
  }
}

const activeCompact = props => {
  if(props.type === 'compact') {
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