import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectPostStyle } from '../../redux/sub-navigation/sub-navigation.actions';
import SubNavigation from './sub-navigation.component';
import { createStructuredSelector } from 'reselect';
import { selectSubNavigationStyle } from '../../redux/sub-navigation/sub-navigation.selector';
import WithLoading from '../with-loading/with-loading.component';
import { selectSubReaditListsIsLoading, selectSubReaditLists } from '../../redux/sub-readit/sub-readit.selector';

const mapStateToProps = createStructuredSelector({
  selectSubNavigationStyle,
  selectSubReaditLists,
  loading: state => !selectSubReaditListsIsLoading(state) 
})

const mapDispatchToProps = dispatch => ({
  onSelectPostStyle: (style) => dispatch(selectPostStyle(style))
});

const SubNavigationContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithLoading)(SubNavigation);

export default SubNavigationContainer;