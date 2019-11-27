export const checkIfLinkOrPost = post => {
  if (!post.subReadit) {
    throw Error('Please select a sub-readit')
  }

  if ( post.title < 2) {
    throw Error('Title should be 2 letters long')
  }

  if (post.text) {
    return {
      subReadit: post.subReadit,
      text: post.text,
      title: post.title
    }
  }

  const pattern = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|jpeg)/g);
  const imageLink = post.image;
  if (!pattern.test(imageLink)) {
    throw Error('Please start with http and end with the file type')
  }

  return {
    subReadit: post.subReadit,
    image: post.image,
    title: post.title
  }
}

export const convertPostCommentsToArray = (post, id) => {
  if (post.hasOwnProperty('comments')) {
    const commentsArray = Object.keys(post.comments).map(key => post.comments[key]);
    const updatedPost = {
      ...post,
      id,
      comments: commentsArray,
      commentsLength: commentsArray.length
    }

    return updatedPost

  }
  const updatedPost = {
    ...post,
    id,
    comments: [],
    commentsLength: null
  }

  return updatedPost

};
