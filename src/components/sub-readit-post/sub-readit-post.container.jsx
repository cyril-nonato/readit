import { compose } from "redux"
import { connect } from 'react-redux'
import WithLoading from "../with-loading/with-loading.component"
import SubReaditPost from "./sub-readit-post.component"
import { selectSubReaditSubIsLoading, selectSubReaditSub } from "../../redux/sub-readit/sub-readit.selector";
import { createStructuredSelector } from "reselect"
import { selectCrudPostPost, selectCrudPostPostIsLoading } from '../../redux/crud-post/crud-post.selector';
import { addCommentRequest } from "../../redux/comment/comment.actions";
import { selectAuthUserCreds } from "../../redux/auth/auth.selector";
import { withRouter } from 'react-router-dom'
import { deletePostRequest } from "../../redux/crud-post/crud-post.actions";

const mapStateToProps = createStructuredSelector({
  selectCrudPostPost,
  selectSubReaditSub,
  selectAuthUserCreds,
  loading: state => !(selectSubReaditSubIsLoading(state) && selectCrudPostPostIsLoading(state))
});

const mapDispatchToProps = dispatch => ({
  onAddCommentRequest: (comment) => dispatch(addCommentRequest(comment)),
  onDeletePostRequest: (id) => dispatch(deletePostRequest(id))
})

const SubReaditPostContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, WithLoading)(SubReaditPost);

export default SubReaditPostContainer;