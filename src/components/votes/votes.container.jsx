import { compose } from 'redux'
import { connect } from 'react-redux'
import { voteUpRequest, voteDownRequest } from '../../redux/votes/votes.actions';
import Votes from './votes.component';

const mapDispatchToProps = dispatch => ({
  onVoteUpRequest: (id, value) => dispatch(voteUpRequest(id, value)),
  onVoteDownRequest: (id, value) => dispatch(voteDownRequest(id, value))
})

const VoteContainer = compose(connect(null, mapDispatchToProps))(Votes);

export default VoteContainer;