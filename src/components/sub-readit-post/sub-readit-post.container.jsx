import { compose } from "redux"
import { connect } from 'react-redux'
import WithLoading from "../with-loading/with-loading.component"
import SubReaditPost from "./sub-readit-post.component"
import { selectSubReaditSubIsLoading, selectSubReaditSub } from "../../redux/sub-readit/sub-readit.selector";
import { createStructuredSelector } from "reselect";
import { selectCrudPostPost, selectCrudPostPostIsLoading } from '../../redux/crud-post/crud-post.selector';

const mapStateToProps = createStructuredSelector({
  selectCrudPostPost,
  selectSubReaditSub,
  loading: state => !(selectSubReaditSubIsLoading(state) && selectCrudPostPostIsLoading(state))
})

const SubReaditPostContainer = compose(connect(mapStateToProps), WithLoading)(SubReaditPost);

export default SubReaditPostContainer;