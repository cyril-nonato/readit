import { connect } from 'react-redux'
import { compose } from 'redux'
import { postsRequest } from '../../redux/posts/posts.actions';
import HomePage from './home-page.component'
import { createStructuredSelector } from 'reselect';
import { selectPostsAllPosts, selectPostsAllPostsIsLoading } from '../../redux/posts/posts.select';
import { subReaditRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditList, selectSubReaditListIsLoading } from '../../redux/sub-readit/sub-readit.selector';

const mapStateToProps = createStructuredSelector({
  selectPostsAllPosts,
  selectSubReaditList,
  loadingPost: state => !selectPostsAllPostsIsLoading(state),
  loadingSubs: state => !selectSubReaditListIsLoading(state) 
});

const mapDispatchToProps = dispatch => ({
  onPostsRequest: (parameter) => dispatch(postsRequest(parameter)),
  onSubreaditRequest: () => dispatch(subReaditRequest())
});

const HomePageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(HomePage);

export default HomePageContainer;