import { connect } from 'react-redux'
import { compose } from 'redux'
import { postsRequest } from '../../redux/posts/posts.actions';
import HomePage from './home-page.component'
import { createStructuredSelector } from 'reselect';
import { selectPostsAllPosts, selectPostsAllPostsIsLoading } from '../../redux/posts/posts.select';
import WithLoading from '../../components/with-loading/with-loading.component';

const mapStateToProps = createStructuredSelector({
  selectPostsAllPosts,
  loading: state => !selectPostsAllPostsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onPostsRequest: () => dispatch(postsRequest())
});

const HomePageContainer = compose(connect(mapStateToProps, mapDispatchToProps))(HomePage);

export default HomePageContainer;