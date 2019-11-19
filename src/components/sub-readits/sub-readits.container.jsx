import { compose } from 'redux'
import WithLoading from '../with-loading/with-loading.component'
import SubReadits from './sub-readits.component'

const SubReaditsContainer = compose(WithLoading)(SubReadits);

export default SubReaditsContainer;