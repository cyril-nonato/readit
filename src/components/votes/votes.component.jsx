import React, { useState } from 'react'

import * as S from './votes.styles'

const Votes = ({ created_by, selectVotesVotesList, value, id, onVoteUpRequest, onVoteDownRequest, selectAuthUserCreds }) => {
  let checkForOwner = null;
  if (selectAuthUserCreds) {
    checkForOwner = created_by === selectAuthUserCreds.username
  }
  // eslint-disable-next-line no-unused-vars
  const [disable, setDisable] = useState(checkForOwner);

  // Css styling
  let checkTypeVote;
  if (selectVotesVotesList) {
    if (selectVotesVotesList.hasOwnProperty(id)) {
      checkTypeVote = selectVotesVotesList[id]
    } else {
      checkTypeVote = 'no vote yet'
    }
  }

  return (
    <React.Fragment>
      <S.ArrowContainer disabled={disable} onClick={() => onVoteUpRequest(id, value)}>
        <S.Up checkTypeVote={checkTypeVote} />
      </S.ArrowContainer>
      <S.VoteValue>{value}</S.VoteValue>
      <S.ArrowContainer disabled={disable} onClick={() => onVoteDownRequest(id, value)}>
        <S.Down checkTypeVote={checkTypeVote} />
      </S.ArrowContainer>
    </React.Fragment>
  );
}

export default Votes;