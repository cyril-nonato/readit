import { connect } from 'react-redux'
import { compose } from 'redux'
import { postsRequest } from '../../redux/posts/posts.actions';
import HomePage from './home-page.component'
import { createStructuredSelector } from 'reselect';
import { selectPostsAllPosts, selectPostsAllPostsIsLoading } from '../../redux/posts/posts.select';
import { subReaditListsRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditLists, selectSubReaditListsIsLoading } from '../../redux/sub-readit/sub-readit.selector';

const mapStateToProps = createStructuredSelector({
  selectPostsAllPosts,
  selectSubReaditLists: selectSubReaditLists,
  loadingPosts: state => !selectPostsAllPostsIsLoading(state),
  loadingSubs: state => !selectSubReaditListsIsLoading(state) 
});

const mapDispatchToProps = dispatch => ({
  onPostsRequest: (parameter) => dispatch(postsRequest(parameter)),
  onSubreaditListsRequest: () => dispatch(subReaditListsRequest())
});

const HomePageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(HomePage);

export default HomePageContainer;