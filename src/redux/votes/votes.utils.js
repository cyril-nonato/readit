export const checkUpVoteOrNotVote = (userCreds, post_id) => {

  if (userCreds.hasOwnProperty('votes')) {
    const votesObj = userCreds.votes;
    if (votesObj.hasOwnProperty(post_id)) {
      return votesObj[post_id];
    }

    return false;
  }

  return false;
};

export const checkDownVoteOrNotVote = (userCreds, post_id) => {
  if (userCreds.hasOwnProperty('votes')) {
    const votesObj = userCreds.votes;
    console.log(votesObj);
    if (votesObj.hasOwnProperty(post_id)) {
      return votesObj[post_id];
    }

    return true;
  }

  return true;
};