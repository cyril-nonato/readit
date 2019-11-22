import { connect } from 'react-redux'
import { compose } from 'redux'
import { postsRequest, postsCancelRequest } from '../../redux/posts/posts.actions';
import HomePage from './home-page.component'
import { createStructuredSelector } from 'reselect';
import { selectPostsAllPosts, selectPostsAllPostsIsLoading } from '../../redux/posts/posts.select';
import { subReaditListsRequest, subReaditCancelRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditLists, selectSubReaditListsIsLoading } from '../../redux/sub-readit/sub-readit.selector';
import { votesCheckRequest } from '../../redux/votes/votes.actions';
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';

const mapStateToProps = createStructuredSelector({
  selectPostsAllPosts,
  selectSubReaditLists,
  loadingPosts: state => !selectPostsAllPostsIsLoading(state),
  loadingSubs: state => !selectSubReaditListsIsLoading(state) 
});

const mapDispatchToProps = dispatch => ({
  onPostsRequest: (parameter) => dispatch(postsRequest(parameter)),
  onSubReaditListsRequest: () => dispatch(subReaditListsRequest()),
  onPostsCancelRequest: () => dispatch(postsCancelRequest()),
  onSubReaditCancelRequest: () => dispatch(subReaditCancelRequest()),
});

const HomePageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(HomePage);

export default HomePageContainer;