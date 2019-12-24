import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector'
import CreateSubReaditPage from './create-sub-readit-page.component'

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds
})

const CreateSubReaditPageContainer = compose(connect(mapStateToProps, null))(CreateSubReaditPage);

export default CreateSubReaditPageContainer;