import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import CreatePost from './create-post.component';
import WithLoading from '../with-loading/with-loading.component';
import { selectSubReaditListsIsLoading, selectSubReaditSub } from '../../redux/sub-readit/sub-readit.selector';
import { createPostRequest, crudPostClearPopUp } from '../../redux/crud-post/crud-post.actions';
import { selectSubReaditLists } from '../../redux/sub-readit/sub-readit.selector';
import { selectCrudPostSuccess, selectCrudPostFailure, selectCrudPostPopUp } from '../../redux/crud-post/crud-post.selector';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  selectSubReaditSub,
  selectSubReaditLists,
  selectCrudPostSuccess,
  selectCrudPostFailure,
  selectCrudPostPopUp,
  loading: state => !selectSubReaditListsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onCrudPostClearPopUp: () => dispatch(crudPostClearPopUp()),
  onCreatePostRequest: (post) => dispatch(createPostRequest(post))
});

const CreatePostContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(CreatePost);

export default CreatePostContainer;