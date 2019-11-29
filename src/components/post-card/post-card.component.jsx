import React from 'react';

import * as S from './post-card.styles'
import VotesContainer from '../votes/votes.container';
import timeAgo from '../utils/timeAgo';

const PostCard = ({ post, isLink, type }) => {
  const { id, commentsLength, title, image, text, subReadit, created_at, created_by, votes } = post
  const time = timeAgo(created_at);

  // use for rendering all post
  if (isLink) {
    return (
      <S.ItemLink type={type}>
        <S.InfoContainer>
          <S.SubReaditName to={`/r/${subReadit}`}>r/{subReadit}</S.SubReaditName>
          <S.Owner>Posted by: {created_by}</S.Owner>
          <S.Time>{time}</S.Time>
        </S.InfoContainer>
        <S.ContentContainerLink to={`/r/${subReadit}/${id}`}>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          {
            !image &&
            <S.Cover />
          }
          {
            image &&
            <S.BackgroundImage src={image} />
          }
        </S.ContentContainerLink>
        <S.VotesContainer>
          <VotesContainer created_by={created_by} id={id} value={votes} />
        </S.VotesContainer>
        <S.CommentsContainerLink to={`/r/${subReadit}/${id}`}>
          <S.CommentsHover>
            <S.CommentsIcon />
            <S.CommentsText>{commentsLength}</S.CommentsText>
            <S.CommentsText>Comments</S.CommentsText>
          </S.CommentsHover>
        </S.CommentsContainerLink>
      </S.ItemLink>
    )
  }

  // Use for rendering subreadit posts
  return (
    <S.Item>
      <S.InfoContainer>
        <S.SubReaditName to={`/r/${subReadit}`}>r/{subReadit}</S.SubReaditName>
        <S.Owner>Posted by: {created_by}</S.Owner>
        <S.Time>{time}</S.Time>
      </S.InfoContainer>
      <S.ContentContainer image={image}>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        {
          image &&
          <S.BackgroundImage src={image} />
        }
      </S.ContentContainer>
      <S.VotesContainer>
        <VotesContainer created_by={created_by} id={id} value={votes} />
      </S.VotesContainer>
      <S.CommentsContainer>
        <S.CommentsHover>
          <S.CommentsIcon />
          <S.CommentsText>{commentsLength}</S.CommentsText>
          <S.CommentsText>Comments</S.CommentsText>
        </S.CommentsHover>
      </S.CommentsContainer>
    </S.Item>
  );
}

export default PostCard;