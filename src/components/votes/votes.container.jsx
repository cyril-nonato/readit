import { compose } from 'redux'
import { connect } from 'react-redux'
import { voteUpRequest, voteDownRequest } from '../../redux/votes/votes.actions';
import Votes from './votes.component';
import { createStructuredSelector } from 'reselect';
import { selectVotesVotesList } from '../../redux/votes/votes.select';

const mapStateToProps = createStructuredSelector({
  selectVotesVotesList,
})

const mapDispatchToProps = dispatch => ({
  onVoteUpRequest: (id, value) => dispatch(voteUpRequest(id, value)),
  onVoteDownRequest: (id, value) => dispatch(voteDownRequest(id, value))
});

const VotesContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Votes);

export default VotesContainer;