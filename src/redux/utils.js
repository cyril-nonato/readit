
// adds id to for each object
export const docsToMap = (docs) => {
  const posts = docs.map(doc => {
    const id = doc.id;
    const data = doc.data();

    return {
      ...data,
      id
    }
  });

  return posts;
};