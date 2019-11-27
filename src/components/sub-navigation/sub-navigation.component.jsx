import React from 'react';
import * as S from './sub-navigation.styles'

const SubNavigation = ({onSelectPostStyle, selectSubNavigationStyle}) => {

  const handleClick = e => {
    switch (e.target.getAttribute('data-id')) {
      case 'card':
      case 'classic':
      case 'compact':
        onSelectPostStyle(e.target.getAttribute('data-id'));
        break;
      default:
        break;
    }
  }

  return (
    <S.Container onClick={handleClick}>
      <S.ViewContainer>
        <S.ViewText>View</S.ViewText>
        <S.Card type={selectSubNavigationStyle} >
          <S.Box data-id='card' />
          <S.Box data-id='card' />
          <S.Text>Card</S.Text>
        </S.Card>
        <S.Classic type={selectSubNavigationStyle} >
          <S.Box data-id='classic' />
          <S.Box data-id='classic' />
          <S.Box data-id='classic' />
          <S.Text>Classic</S.Text>
        </S.Classic>
        <S.Compact type={selectSubNavigationStyle} >
          <S.Box data-id='compact' />
          <S.Box data-id='compact' />
          <S.Box data-id='compact' />
          <S.Box data-id='compact' />
          <S.Text>Compact</S.Text>
        </S.Compact>
      </S.ViewContainer>
    </S.Container>
  );
}

export default SubNavigation;