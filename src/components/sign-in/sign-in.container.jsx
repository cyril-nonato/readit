import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInRequest } from '../../redux/auth/auth.actions'
import SignIn from './sign-in.component';
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
});

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds))
});

const SignInContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SignIn);

export default SignInContainer;