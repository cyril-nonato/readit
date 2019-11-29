import { connect } from 'react-redux'
import { compose } from 'redux'
import { postsCancelRequest, postsFilterByUsernameRequest } from '../../redux/posts/posts.actions';
import { createStructuredSelector } from 'reselect';
import { selectPostsFilteredPosts, selectPostsFilteredPostsIsLoading } from '../../redux/posts/posts.select';
import { subReaditListsRequest, subReaditCancelRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditLists, selectSubReaditListsIsLoading } from '../../redux/sub-readit/sub-readit.selector';
import UserPostsPage from './user-posts-page.component';

const mapStateToProps = createStructuredSelector({
  selectPostsFilteredPosts,
  selectSubReaditLists,
  loadingPosts: state => !selectPostsFilteredPostsIsLoading(state),
  loadingSubs: state => !selectSubReaditListsIsLoading(state) 
});

const mapDispatchToProps = dispatch => ({
  onPostsFilterByUsername: () => dispatch(postsFilterByUsernameRequest()),
  onSubReaditListsRequest: () => dispatch(subReaditListsRequest()),
  onPostsCancelRequest: () => dispatch(postsCancelRequest()),
  onSubReaditCancelRequest: () => dispatch(subReaditCancelRequest()),
});

const UserPostsPageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(UserPostsPage);

export default UserPostsPageContainer;