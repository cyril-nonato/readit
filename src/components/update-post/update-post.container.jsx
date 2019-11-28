import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import WithLoading from '../with-loading/with-loading.component';
import { selectSubReaditSub } from '../../redux/sub-readit/sub-readit.selector';
import { updatePostRequest } from '../../redux/crud-post/crud-post.actions';
import UpdatePost from './update-post.component';
import { selectCrudPostPost, selectCrudPostPostIsLoading } from '../../redux/crud-post/crud-post.selector';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  selectSubReaditSub,
  selectCrudPostPost,
  loading: state => ! selectCrudPostPostIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onUpdatePostRequest: (post) => dispatch(updatePostRequest(post))
});

const UpdatePostContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(UpdatePost);

export default UpdatePostContainer;