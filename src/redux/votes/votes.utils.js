

//   return true;
// };

/*
 Firebase
 Upvoted = true;
 Downvoted = false;
*/


// Checks if the user already up voted in a certain post
// Return boolean if upvoted else return false if not yet voted
export const checkUpVoteOrNotVote = (votesList, id) => {

  if(votesList.hasOwnProperty(id)) {
    return votesList[id]
  }

  return false;
}

// Checks if the user already down voted in a certain post
// Return boolean if upvoted else return false if not yet voted
export const checkDownVoteOrNotVote = (votesList, id) => {
  
  if(votesList.hasOwnProperty(id)) {
    // Returns the reverse if the user already upvoted
    return !votesList[id]
  }

  return false
}