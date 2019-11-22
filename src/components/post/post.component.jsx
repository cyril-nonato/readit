import React from 'react';

import * as S from './post.styles'
import VoteContainer from '../votes/votes.container';
import timeAgo from '../utils/timeAgo';

const Post = ({ post, isLink }) => {
  const { id, title, text, subReadit, created_at, created_by, votes } = post
  const time = timeAgo(created_at);

  // use for rendering all post
  if (isLink) {
    return (
      <S.Item>
        <S.InfoContainer>
          <S.SubReaditName>r/{subReadit}</S.SubReaditName>
          <S.Owner>Posted by: {created_by}</S.Owner>
          <S.Time>{time}</S.Time>
        </S.InfoContainer>
        <S.ContentContainerLink to={`/r/${subReadit}/${id}`}>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          <S.Cover />
        </S.ContentContainerLink>
        <VoteContainer id={id} value={votes} />
        <S.CommentsContainerLink to={`/r/${subReadit}/${id}`}>
          <S.BackgroundContainer>
            <S.CommentsIcon />
            <S.CommentsText>Comments</S.CommentsText>
          </S.BackgroundContainer>
        </S.CommentsContainerLink>
      </S.Item>
    )
  }

  // Use for rendering specific post page
  return (
    <S.Item>
      <S.InfoContainer>
        <S.SubReaditName>r/{subReadit}</S.SubReaditName>
        <S.Owner>Posted by: {created_by}</S.Owner>
        <S.Time>{time}</S.Time>
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