import { compose } from 'redux'
import { connect } from 'react-redux'
import { signUpRequest } from '../../redux/auth/auth.actions'
import SignUp from './sign-up.component'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
});
const mapDispatchToProps = dispatch => ({
  onSignUpRequest: (userCreds) => dispatch(signUpRequest(userCreds))
});

const SignUpContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SignUp);

export default SignUpContainer;