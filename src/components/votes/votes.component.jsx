import React from 'react'

import * as S from './votes.styles'

const Votes = ({styleType, selectVotesVotesList, value, id, onVoteUpRequest, onVoteDownRequest}) => {
  
  let checkTypeVote;
  if(selectVotesVotesList) {
    if(selectVotesVotesList.hasOwnProperty(id)) {
      checkTypeVote = selectVotesVotesList[id]
    } else {
      checkTypeVote = 'no vote yet'
    }
  }

  return (
    <React.Fragment>
      <S.ArrowContainer onClick={() => onVoteUpRequest(id, value)}>
        <S.Up checkTypeVote={checkTypeVote} />
      </S.ArrowContainer>
      <S.VoteValue>{value}</S.VoteValue>
      <S.ArrowContainer  onClick={() => onVoteDownRequest(id, value)}>
        <S.Down checkTypeVote={checkTypeVote} />
      </S.ArrowContainer>
    </React.Fragment>
  );
}

export default Votes;