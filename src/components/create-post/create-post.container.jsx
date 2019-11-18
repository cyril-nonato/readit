import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInRequest } from '../../redux/auth/auth.actions'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import CreatePost from './create-post.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
});

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds))
});

const CreatePostContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CreatePost);

export default CreatePostContainer;