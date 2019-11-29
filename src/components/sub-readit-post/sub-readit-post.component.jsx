import React, { useState } from 'react'

import * as S from './sub-readit-post.styles'
import CustomButton from '../custom-button/custom-button.component'
import FormArea from '../form-area/form-area.component'
import Comment from '../comment/comment.component'
import PostCard from '../post-card/post-card.component'
import PopUp from '../pop-up/pop-up.component'

const SubReaditPost = ({
  selectCrudPostPost,
  selectSubReaditSub: { id, icon, text, background },
  onAddCommentRequest,
  selectAuthUserCreds,
  onDeletePostRequest,
  history,
  selectCrudPostSuccess,
  selectCrudPostFailure,
  selectCrudPostPopUp,
  onCrudPostClearPopUp
}) => {

  const { comments, uid, subReadit } = selectCrudPostPost

  const [newComment, setNewComment] = useState('');
  const handleChange = e => {
    setNewComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    onAddCommentRequest(newComment);
    setNewComment('');
  }

  const handleClickFormArea = e => {
    if (!selectAuthUserCreds) {
      history.push('/login');
    }
  };

  const handleDelete = () => {
    onDeletePostRequest(selectCrudPostPost.id)
  };

  const handlePopUpClear = () => {
    if(selectCrudPostSuccess) {
      onCrudPostClearPopUp();
      history.push('/');
    } else {
      onCrudPostClearPopUp();
    }
  }


  const showButton = selectAuthUserCreds ? selectAuthUserCreds.uid === uid : null;
  
  return (
    <S.Container>
      <PopUp checkPopUp={selectCrudPostPopUp} success={selectCrudPostSuccess} failure={selectCrudPostFailure} clear={handlePopUpClear} />
      <S.Background background={background}>
        <S.BgDetails>
          <S.Icon src={icon} />
          <S.Name>r/{id}</S.Name>
        </S.BgDetails>
      </S.Background>
        <S.PostContainer>
          {
            showButton &&
            <S.DeleteButton onClick={handleDelete}>&#10006;</S.DeleteButton>
          }
          {
            showButton &&
            <S.Edit to={`/update-post/${subReadit}/${selectCrudPostPost.id}`}>
              <S.EditIcon />
            </S.Edit>
          }
          <PostCard post={selectCrudPostPost} />
          <S.Form onSubmit={handleSubmit}>
            <FormArea onClick={handleClickFormArea} type='input' label='What are your thoughts?' value={newComment} onChange={handleChange} />
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