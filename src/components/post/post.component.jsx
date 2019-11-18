import React from 'react';

import * as S from './post.styles'
import VoteContainer from '../votes/votes.container';

const Post = ({ post }) => {
  const { id, title, text, sub_readit, created_at, created_by, votes } = post

  return (
    <S.Item>
      <S.InfoContainer>
        <S.SubReaditName>r/{sub_readit}</S.SubReaditName>
        <S.Owner>Posted by: u/{created_by}</S.Owner>
      </S.InfoContainer>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.Cover />
      </S.ContentContainer>
      <VoteContainer id={id} value={votes} />
      <S.CommentsContainer>
        <S.BackgroundContainer>
          <S.CommentsIcon />
          <S.CommentsText>Comments</S.CommentsText>
        </S.BackgroundContainer>
      </S.CommentsContainer>
    </S.Item>
  );
}

export default Post;