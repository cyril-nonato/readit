import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInRequest, authClearPopUp } from '../../redux/auth/auth.actions'
import SignIn from './sign-in.component';
import { selectAuthUserCreds, selectAuthLoading, selectAuthSuccess, selectAuthFailure, selectAuthPopUp } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import WithLoading from '../with-loading/with-loading.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  selectAuthSuccess,
  selectAuthFailure,
  selectAuthPopUp,
  loading: selectAuthLoading
});

const mapDispatchToProps = dispatch => ({
  onAuthClearPopUp: () => dispatch(authClearPopUp()),
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds))
});

const SignInContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(SignIn);

export default SignInContainer;