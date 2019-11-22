import { connect } from 'react-redux'
import { compose } from 'redux'
import { postFilterBySubReaditRequest, postsCancelRequest } from '../../redux/posts/posts.actions';
import { createStructuredSelector } from 'reselect';
import { selectPostsFilteredPosts, selectPostsFilteredPostsIsLoading } from '../../redux/posts/posts.select';
import { subReaditRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditSub, selectSubReaditSubIsLoading } from '../../redux/sub-readit/sub-readit.selector';
import SubReaditPostsPage from './sub-readit-posts-page.component';

const mapStateToProps = createStructuredSelector({
  selectSubReaditSub,
  selectPostsFilteredPosts,
  loadingPosts: state => !selectPostsFilteredPostsIsLoading(state),
  loadingSubs: state => !selectSubReaditSubIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onPostFilterBySubReaditRequest: (subReadit) => dispatch(postFilterBySubReaditRequest(subReadit)),
  onPostsCancelRequest: () => dispatch(postsCancelRequest()),
  onSubReaditRequest: (subReadit) => dispatch(subReaditRequest(subReadit))
});

const SubReaditPostsPageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SubReaditPostsPage);

export default SubReaditPostsPageContainer;