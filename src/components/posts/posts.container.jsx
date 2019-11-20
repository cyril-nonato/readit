import WithLoading from '../with-loading/with-loading.component'
import Posts from './posts.component'

const PostsContainer = WithLoading(Posts);

export default PostsContainer;