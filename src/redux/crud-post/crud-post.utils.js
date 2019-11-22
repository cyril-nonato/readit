export const checkIfLinkOrPost = post => {
  if(!post.subReadit) {
    throw Error('Please select a sub-readit')
  }

  if(post.text.length < 2 || post.title < 2) {
    throw Error('Title and content should be 2 letters long')
  }

  if(post.text) {
    return {
      subReadit: post.subReadit,
      text: post.text,
      title: post.title
    }
  }

  const pattern = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|jpeg)/g);
  const imageLink = post.image;
  if(!pattern.test(imageLink)) {
    throw Error('Please start with http and end with the file type')
  }
  
  return {
    subReadit: post.subReadit,
    image: post.image,
    title: post.title
  }
}