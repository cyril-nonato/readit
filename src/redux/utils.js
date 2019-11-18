
// adds id to for each object
export const docsToMap = (docs) => {
  const data = docs.map(doc => {
    const id = doc.id;
    const data = doc.data();
    return {
      ...data,
      id
    }
  });

  return data;
};