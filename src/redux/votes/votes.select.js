import {createSelector} from 'reselect'

const selectVotes = state => state.votes;

export const selectVotesVotesList = createSelector(
  [selectVotes],
  votes => votes.votesList
);