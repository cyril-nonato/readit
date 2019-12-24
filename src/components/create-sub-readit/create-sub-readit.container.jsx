import {connect} from 'react-redux';
import { compose } from 'redux';
import CreateSubReadit from './create-sub-readit.component';
import { subReaditCreateRequest } from '../../redux/sub-readit/sub-readit.actions';

const mapDispatchToProps = dispatch => ({
  onCreateSubReaditRequest: (details) => dispatch(subReaditCreateRequest(details))
});

const CreateSubReaditContainer = compose(connect(null, mapDispatchToProps))(CreateSubReadit);

export default CreateSubReaditContainer;