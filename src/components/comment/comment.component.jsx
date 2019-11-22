import React from 'react'

import * as S from './comment.styles'
import timeAgo from '../utils/timeAgo';

const Comment = ({comment: {comment, commented_by, created_at}}) => {
  const time = timeAgo(created_at);

  return (
    <S.Container>
      <S.NameAndTime>
        <S.Name>{commented_by}</S.Name>
        <S.Time>{time}</S.Time>
      </S.NameAndTime>
      <S.Comment>{comment}</S.Comment>
    </S.Container>
  );
}

export default Comment;