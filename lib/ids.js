import API from "../helpers/prismic";

const formatIds = (ids) => {
  return ids.map((id) => ({
    params: {
      id,
    }
  }));
};

export async function getAllIds() {
  // returns array of ID strings
  const allDocs = await API.getAllDocumentIds();
  console.log(formatIds(allDocs));

  return formatIds(allDocs);
}

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
