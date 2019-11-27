import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectPostStyle } from '../../redux/sub-navigation/sub-navigation.actions';
import SubNavigation from './sub-navigation.component';
import { createStructuredSelector } from 'reselect';
import { selectSubNavigationStyle } from '../../redux/sub-navigation/sub-navigation.selector';

const mapStateToProps = createStructuredSelector({
  selectSubNavigationStyle
})

const mapDispatchToProps = dispatch => ({
  onSelectPostStyle: (style) => dispatch(selectPostStyle(style))
});

const SubNavigationContainer = compose(connect(mapStateToProps, mapDispatchToProps))(SubNavigation);

export default SubNavigationContainer;