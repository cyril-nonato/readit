export const checkForPostType = (post) => {
  if(post.hasOwnProperty('text')) {
    return 'post'
  }

  return 'link'
}