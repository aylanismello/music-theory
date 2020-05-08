import API from "../helpers/prismic";

const formatIds = (ids) => {
  return ids.map((id) => ({
    params: {
      id,
    },
  }));
};

export default async () => {
  // returns array of ID strings
  const allDocs = await API.getAllDocumentIds();
  return formatIds(allDocs);
};

// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
