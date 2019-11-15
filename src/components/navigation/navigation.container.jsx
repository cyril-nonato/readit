import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInRequest } from '../../redux/auth/auth.actions'
import { selectAuthUserCreds } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import Navigation from './navigation.component';

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds,
});

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds))
});

const NavigationContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Navigation);

export default NavigationContainer;