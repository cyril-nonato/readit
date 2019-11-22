import {connect} from 'react-redux'
import { compose } from 'redux'
import CreatePostPage from './create-post-page.component'
import { createStructuredSelector } from 'reselect';
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { subReaditListsRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditLists } from '../../redux/sub-readit/sub-readit.selector';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  selectSubReaditLists
});

const mapDispatchToProps = dispatch => ({
  onSubReaditListsRequest: () => dispatch(subReaditListsRequest())
});

const CreatePostPageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CreatePostPage);

export default CreatePostPageContainer;