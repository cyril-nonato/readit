import {connect} from 'react-redux'
import { compose } from 'redux'
import CreatePostPage from './create-post-page.component'
import { createStructuredSelector } from 'reselect';
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds
});

const CreatePostPageContainer = compose(connect(mapStateToProps))(CreatePostPage);

export default CreatePostPageContainer;