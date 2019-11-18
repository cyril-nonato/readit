import {compose} from 'redux'
import WithLoading from '../with-loading/with-loading.component'
import Communities from './communities.component'

const CommunitiesContainer = compose(WithLoading)(Communities);

export default CommunitiesContainer;