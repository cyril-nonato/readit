

//   return true;
// };

/*
 Firebase
 Upvoted = true;
 Downvoted = false;
*/


// Checks if the user already up/ downvted voted in a certain post
export const checkVote = (votesList, id) => {

  if(votesList.hasOwnProperty(id)) {
    if(votesList[id] === true) {
      return 'upvote'
    } else if (votesList[id] === false) {
      return 'downvote'
    }
  }

  return 'no vote';
}
