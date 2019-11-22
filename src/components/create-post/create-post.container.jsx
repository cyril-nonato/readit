import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInRequest } from '../../redux/auth/auth.actions'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import CreatePost from './create-post.component';
import WithLoading from '../with-loading/with-loading.component';
import { selectSubReaditListsIsLoading, selectSubReaditSub } from '../../redux/sub-readit/sub-readit.selector';
import { createPostRequest } from '../../redux/crud-post/crud-post.actions';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  selectSubReaditSub,
  loading: state => !selectSubReaditListsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds)),
  onCreatePostRequest: (post) => dispatch(createPostRequest(post))
});

const CreatePostContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(CreatePost);

export default CreatePostContainer;