import { connect } from 'react-redux'
import { compose } from 'redux'
import SubReaditPostPage from './sub-readit-post-page.component';
import { readPostRequest, crudCancelRequest } from '../../redux/crud-post/crud-post.actions';
import { subReaditRequest } from '../../redux/sub-readit/sub-readit.actions';

const mapDispatchToProps = dispatch => ({
  onReadPostRequest: (subReadit, id) => dispatch(readPostRequest(subReadit, id)),
  onSubReaditRequest: (subReadit) => dispatch(subReaditRequest(subReadit)),
  onCrudCancelRequest: () => dispatch(crudCancelRequest())
});

const SubReaditPostPageContainer = compose(connect(null, mapDispatchToProps))(SubReaditPostPage);

export default SubReaditPostPageContainer;