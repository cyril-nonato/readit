import { connect } from 'react-redux'
import { compose } from 'redux'
import SubReaditPostPage from './sub-readit-post-page.component';
import { readPostRequest, crudCancelRequest } from '../../redux/crud-post/crud-post.actions';
import { subReaditRequest } from '../../redux/sub-readit/sub-readit.actions';
import { createStructuredSelector } from 'reselect';
import { selectCrudPostFailure } from '../../redux/crud-post/crud-post.selector';
import WithNotFound from '../../components/with-not-found/with-not-found.component';

const mapStateToProps = createStructuredSelector({
  error: selectCrudPostFailure,
});

const mapDispatchToProps = dispatch => ({
  onReadPostRequest: (subReadit, id) => dispatch(readPostRequest(subReadit, id)),
  onSubReaditRequest: (subReadit) => dispatch(subReaditRequest(subReadit)),
  onCrudCancelRequest: () => dispatch(crudCancelRequest())
});

const SubReaditPostPageContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithNotFound)(SubReaditPostPage);

export default SubReaditPostPageContainer;