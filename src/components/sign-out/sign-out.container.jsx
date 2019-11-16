import { compose } from 'redux'
import { connect } from 'react-redux'
import { signOutRequest } from '../../redux/auth/auth.actions'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import SignOut from './sign-out.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
});

const mapDispatchToProps = dispatch => ({
  onSignOutRequest: () => dispatch(signOutRequest())
});

const SignOutContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SignOut);

export default SignOutContainer;