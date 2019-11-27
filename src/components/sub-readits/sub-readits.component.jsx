import React from 'react';

import * as S from './sub-readits.styles'
import SubReadit from '../sub-readit/sub-readit.component';

const SubReadits = ({ lists }) => {

  return (
    <S.Container>
      <S.CommunitiesContainer>
        <S.H3>Communities</S.H3>
      </S.CommunitiesContainer>
      {
        lists.map(list => <SubReadit key={list.id} sub={list} />)
      }
    </S.Container>
  );
}

export default SubReadits;