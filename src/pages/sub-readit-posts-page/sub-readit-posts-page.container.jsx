import { connect } from 'react-redux'
import { compose } from 'redux'
import { postsFilterBySubReaditRequest, postsCancelRequest } from '../../redux/posts/posts.actions';
import { createStructuredSelector } from 'reselect';
import { selectPostsFilteredPosts, selectPostsFilteredPostsIsLoading } from '../../redux/posts/posts.select';
import { subReaditRequest } from '../../redux/sub-readit/sub-readit.actions';
import { selectSubReaditSub, selectSubReaditSubIsLoading, selectSubReaditFailure } from '../../redux/sub-readit/sub-readit.selector';
import SubReaditPostsPage from './sub-readit-posts-page.component';
import WithNotFound from '../../components/with-not-found/with-not-found.component';
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';

const mapStateToProps = createStructuredSelector({
  selectSubReaditSub,
  selectPostsFilteredPosts,
  selectAuthUserCreds: selectAuthUserCreds,
  error: selectSubReaditFailure,
  loadingPosts: state => !selectPostsFilteredPostsIsLoading(state),
  loadingSubs: state => !selectSubReaditSubIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onPostsFilterBySubReaditRequest: (subReadit) => dispatch(postsFilterBySubReaditRequest(subReadit)),
  onPostsCancelRequest: () => dispatch(postsCancelRequest()),
  onSubReaditRequest: (subReadit) => dispatch(subReaditRequest(subReadit))
});

const SubReaditPostsPageContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithNotFound)(SubReaditPostsPage);

export default SubReaditPostsPageContainer;