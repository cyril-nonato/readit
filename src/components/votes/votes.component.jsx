import React from 'react'

import * as S from './votes.styles'

const Votes = ({value, id, onVoteUpRequest, onVoteDownRequest}) => {
  return (
    <S.VotesContainer>
      <S.ArrowContainer onClick={() => onVoteUpRequest(id, value)}>
        <S.Up />
      </S.ArrowContainer>
      <S.VoteValue>{value}</S.VoteValue>
      <S.ArrowContainer onClick={() => onVoteDownRequest(id, value)}>
        <S.Down />
      </S.ArrowContainer>
    </S.VotesContainer>
  );
}

export default Votes;