import React, { useState } from 'react'

import * as S from './sub-readit-post.styles'
import Post from '../post/post.component'
import CustomButton from '../custom-button/custom-button.component'
import FormArea from '../form-area/form-area.component'
import Comment from '../comment/comment.component'

const SubReaditPost = ({ selectCrudPostPost, selectSubReaditSub: { id, icon, text, background } }) => {

  const { comments } = selectCrudPostPost

  const [newComment, setNewComment] = useState('');

  const handleChange = e => {
    setNewComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    
  }

  return (
    <S.Container>
      <S.Background background={background}>
        <S.BgDetails>
          <S.Icon src={icon} />
          <S.Name>r/{id}</S.Name>
        </S.BgDetails>
      </S.Background>
      <S.PostContainer>
        <Post post={selectCrudPostPost} />
        <S.Form onSubmit={handleSubmit}>
          <FormArea type='input' label='What are your thoughts?' value={newComment} onChange={handleChange} />
          <CustomButton type='submit'>Comment</CustomButton>
        </S.Form>
        <S.Comments>
          {
            comments.map((comment, idx) => <Comment key={idx} comment={comment} />)
          }
        </S.Comments>
      </S.PostContainer>
      <S.SubReaditContainer>
        <S.Content>
          <S.Community>Community Details</S.Community>
          <S.Title to={`/r/${id}`}>
            <S.Icon src={icon} />
            <S.Name>r/{id}</S.Name>
          </S.Title>
          <S.Text>{text}</S.Text>
          <S.Button>
            <CustomButton isLink to='/create-post'>Create post</CustomButton>
          </S.Button>
        </S.Content>
      </S.SubReaditContainer>
    </S.Container>
  );
}

export default SubReaditPost;