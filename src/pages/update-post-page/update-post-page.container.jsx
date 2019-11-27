import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { subReaditListsRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditLists } from '../../redux/sub-readit/sub-readit.selector';
import { updatePostRequest, crudCancelRequest, readPostRequest } from '../../redux/crud-post/crud-post.actions';
import UpdatePostPage from './update-post-page.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  selectSubReaditLists
});

const mapDispatchToProps = dispatch => ({
  onReadPostRequest: (subReadit, id) => dispatch(readPostRequest(subReadit, id)),
  onCrudCancelRequest: () => dispatch(crudCancelRequest()),
  onSubReaditListsRequest: () => dispatch(subReaditListsRequest()),
  onUpdatePostRequest: (id) => dispatch(updatePostRequest(id))
});

const UpdatePostPageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(UpdatePostPage);

export default UpdatePostPageContainer;
