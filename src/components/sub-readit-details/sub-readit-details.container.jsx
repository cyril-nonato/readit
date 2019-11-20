import { compose } from 'redux'
import WithLoading from '../with-loading/with-loading.component';
import SubReaditDetails from './sub-readit-details.component';

const SubReaditDetailsContainer = compose(WithLoading)(SubReaditDetails);

export default SubReaditDetailsContainer;


