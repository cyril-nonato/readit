import React, {useState} from 'react';
import * as S from './sub-navigation.styles'

const SubNavigation = ({onSelectPostStyle, selectSubNavigationStyle, selectSubReaditLists}) => {

  const [toggleDropdown, setToggleDropdown] = useState(false);

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

  const handleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  }

  const closeDropdown = e => {
    if(e.target.tagName === 'A') {
      setToggleDropdown(false);
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
      <S.SubReaditContainer>
        <S.SelectSubReadit onClick={handleDropdown}>
          <S.SelectSubReaditText>Select a subReadit</S.SelectSubReaditText>
          <S.SelectSubReaditTriangle />
        </S.SelectSubReadit>
        <S.SubReaditList onClick={closeDropdown}>
          {
            toggleDropdown &&
            selectSubReaditLists.map((item, index) => 
            <S.SubReaditItem data-id='link' key={index}>
              <S.SubReaditIcon data-id='link' src={item.icon} />
              <S.SubReaditLink data-id='link' to={`/r/${item.id}`}>{item.id}</S.SubReaditLink>
            </S.SubReaditItem>
            )
          }
        </S.SubReaditList>
      </S.SubReaditContainer>
    </S.Container>
  );
}

export default SubNavigation;