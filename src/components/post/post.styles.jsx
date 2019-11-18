import styled from 'styled-components'

export const Item = styled.li`
  padding: .5rem 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  max-height: 42rem;
  width: 100%;

  display: grid;
  grid-template-columns: 4fr 20fr;
  grid-auto-rows: auto;
  grid-gap: .75rem;
`;

export const SubReaditName = styled.span`
  padding-right: 1rem;
  font-weight: bold;
`;

export const Owner = styled.span`
  color: ${props => props.theme.tertiary};
`;

export const InfoContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  font-size: 1.2rem;
  min-height: auto;
  max-height: 4rem;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  margin-bottom: .75rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const Cover = styled.div`
  height: 32rem;
  width: 100%;
  background: linear-gradient(to bottom, transparent 0%, transparent 80%, white 100%);
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  position: relative;

  min-height: auto;
  max-height: 32rem;
  overflow: hidden;
`;


export const CommentsIcon = styled.div`
  height: 13px;
  width: 18px;
  background-color: ${props => props.theme.tertiary};
  clip-path: polygon(0 0, 100% 0, 100% 85%, 70% 85%, 50% 100%, 30% 85%, 0 85%);
`;

export const CommentsText = styled.span`
  color: ${props => props.theme.tertiary};
  font-size: 1.2rem;
  margin-left: 1rem;
  font-weight: bold;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CommentsContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  height: 100%;
  min-width: 40%;
  max-width: 45%;
  border-radius: 3px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover ${BackgroundContainer} {
    background-color: ${props => props.theme.quarternary};
  }
`;