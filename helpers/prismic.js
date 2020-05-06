const Prismic = require("prismic-javascript");
const apiEndpoint = "https://music-theory.prismic.io/api/v2";

export default {
  getAllDocumentIds: async () => {
     return Prismic.getApi(apiEndpoint).then(function (api) {
      return api
        .query('')
        .then(function ({ results }) {
          // console.log(response);
          // console.log('got the shit');
          // return response;
          return results.map(result => result.id);
        })
        .catch((e) => {
          return e;
        });
    });
  },
  getDocumentById: async (id) => {
    return Prismic.getApi(apiEndpoint).then(function (api) {
      return api
        .getByID(id)
        .then(function (document) {
          return document;
        })
        .catch((e) => {
          return e;
        });
    });
  },
  getAllCourses: async () => {
    return Prismic.getApi(apiEndpoint).then(function (api) {
      return api
        .query(Prismic.Predicates.at("document.type", "course"))
        .then(function ({ results }) {
          return results;
        })
        .catch((e) => {
          return e;
        });
    });
  },

  getAllCellsForLesson: async (lessonId) => {
    return Prismic.getApi(apiEndpoint).then(function (api) {
      return api
        .query(Prismic.Predicates.at("my.cell.lesson_link", lessonId))
        .then(function (response) {
          return response.results;
        })
        .catch((e) => {
          return e;
        });
    });
  },
  getAllLessonsForCourse: async (courseId) => {
    return Prismic.getApi(apiEndpoint).then(function (api) {
      return api
        .query(Prismic.Predicates.at("my.lesson.course_link", courseId))
        .then(function ({ results }) {
          return results;
        })
        .catch((e) => {
          return e;
        });
    });
  },
  // https://prismic.io/docs/rest-api/query-the-api/query-by-content-relationship
  getAllLessons: async () => {
    return Prismic.getApi(apiEndpoint).then(function (api) {
      return api
        .query(Prismic.Predicates.at("document.type", "lesson"))
        .then(function ({ results }) {
          return results;
        })
        .catch((e) => {
          return e;
        });
    });
  }
  // getAllData: async () => {
  //   const id = "Xqk3GREAACMAf3RW";
  //   let lessons = await getAllLessons();
  //   // console.log(lessons);

  //   for (let i = 0; i < lessons.length; i++) {
  //     let cellsForLesson = await getAllCells(id);
  //     cellsForLesson = cellsForLesson.map((c) => c.data);

  //     lessons[i] = {
  //       ...lessons[i].data,
  //       cells: cellsForLesson,
  //     };
  //   }

  //   return {
  //     props: { lessons },
  //   };
  // },
};
