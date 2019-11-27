export const updateComment = (comments, commentToAdd) => {
  return [...comments, commentToAdd];
}

export const arrayToObj = (arr) => {
  return {...arr}
}