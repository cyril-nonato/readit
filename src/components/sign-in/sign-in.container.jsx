import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInRequest } from '../../redux/auth/auth.actions'
import SignIn from './sign-in.component';
import { selectAuthUserCreds, selectAuthLoading } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import WithLoading from '../with-loading/with-loading.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
  loading: selectAuthLoading
});

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds))
});

const SignInContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(SignIn);

export default SignInContainer;