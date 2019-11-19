import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 60px;
  background-color: ${props => props.theme.primary};
  border-radius: 5px;
`;

export const CommunitiesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-image: url('https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png');
  background-position: center;
  background-size: center;
`

export const H3 = styled.h3`
  font-size: 1.8rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  letter-spacing: 2px;
  color: white;

`