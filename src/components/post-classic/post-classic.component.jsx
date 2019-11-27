import React from 'react'

import * as S from '../post-classic-compact-shared-styles/post-classic-compact.styles'
import * as D from './post-classic.styles'
import VotesContainer from '../votes/votes.container'
import timeAgo from '../utils/timeAgo'

const PostClassic = ({ post, type }) => {
  const { id, commentsLength, title, image, subReadit, created_at, created_by, votes } = post
  const time = timeAgo(created_at);

  return (
    <D.ItemLink>
      <S.InfoContainer>
        <S.SubReaditName to={`/r/${subReadit}`}>r/{subReadit}</S.SubReaditName>
        <S.Owner>Posted by: {created_by}</S.Owner>
        <S.Time>{time}</S.Time>
      </S.InfoContainer>
      <S.ContentContainerLink to={`/r/${subReadit}/${id}`}>
        <S.Title>{title}</S.Title>
      </S.ContentContainerLink>
      <S.ImageContainer>
        {
          image &&
          <S.Image src={image} />
        }
        {
          !image &&
          <S.PostIcon />
        }
      </S.ImageContainer>
      <S.VotesContainer>
        <VotesContainer type={type} id={id} value={votes} />
      </S.VotesContainer>
      <S.CommentsContainerLink to={`/r/${subReadit}/${id}`}>
        <S.CommentsHover>
          <S.CommentsIcon />
          <S.CommentsText>{commentsLength}</S.CommentsText>
          <S.CommentsText>Comments</S.CommentsText>
        </S.CommentsHover>
      </S.CommentsContainerLink>
    </D.ItemLink>
  );
}

export default PostClassic;