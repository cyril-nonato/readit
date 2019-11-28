import { compose } from 'redux'
import { connect } from 'react-redux'
import { signUpRequest } from '../../redux/auth/auth.actions'
import SignUp from './sign-up.component'
import { selectAuthUserCreds, selectAuthLoading } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import WithLoading from '../with-loading/with-loading.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  loading: selectAuthLoading
});
const mapDispatchToProps = dispatch => ({
  onSignUpRequest: (userCreds) => dispatch(signUpRequest(userCreds))
});

const SignUpContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(SignUp);

export default SignUpContainer;