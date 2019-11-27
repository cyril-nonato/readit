import { compose } from 'redux'
import { connect } from 'react-redux'
import WithLoading from '../with-loading/with-loading.component'
import Posts from './posts.component'
import { createStructuredSelector } from 'reselect';
import { selectVotesVotesList } from '../../redux/votes/votes.select';
import { selectSubNavigationStyle } from '../../redux/sub-navigation/sub-navigation.selector';


const mapStateToProps = createStructuredSelector({
  selectVotesVotesList,
  selectSubNavigationStyle
})

const PostsContainer = compose(connect(mapStateToProps), WithLoading)(Posts);

export default PostsContainer;