import { compose } from 'redux'
import WithLoading from '../with-loading/with-loading.component'
import Posts from './posts.component'

const PostsContainer = compose(WithLoading)(Posts);

export default PostsContainer;