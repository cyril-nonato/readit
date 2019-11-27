export const addCommentsLengthProps = (posts) => {
  const updatedPosts =  posts.map(post => {

    if(post.hasOwnProperty('comments')) {
    // Convert to Array
    const commentsArray = Object.keys(post.comments).map(key => post.comments[key]);
    
    return {
      ...post,
      commentsLength: commentsArray.length
    }
    } else {
      return {
        ...post,
        commentsLength: null
      }
    }

  });

  return updatedPosts;

}