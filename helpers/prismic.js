import Prismic from "prismic-javascript";

const apiEndpoint = "https://music-theory.prismic.io/api/v2";

export default {
  getAllDocumentIds: async () => {
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api
        .query("")
        .then(({ results }) => {
          // console.log(response);
          // console.log('got the shit');
          // return response;
          return results.map((result) => result.id);
        })
        .catch((e) => {
          return e;
        });
    });
  },
  getDocumentById: async (id) => {
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api
        .getByID(id)
        .then((document) => {
          return document;
        })
        .catch((e) => {
          return e;
        });
    });
  },
  getAllCourses: async () => {
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api
        .query(Prismic.Predicates.at("document.type", "course"))
        .then(({ results }) => {
          return results;
        })
        .catch((e) => {
          return e;
        });
    });
  },

  getAllCellsForLesson: async (lessonId) => {
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api
        .query(Prismic.Predicates.at("my.cell.lesson_link", lessonId))
        .then((response) => {
          return response.results;
        })
        .catch((e) => {
          return e;
        });
    });
  },
  getAllLessonsForCourse: async (courseId) => {
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api
        .query(Prismic.Predicates.at("my.lesson.course_link", courseId))
        .then(({ results }) => {
          return results;
        })
        .catch((e) => {
          return e;
        });
    });
  },
  // https://prismic.io/docs/rest-api/query-the-api/query-by-content-relationship
  getAllLessons: async () => {
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api
        .query(Prismic.Predicates.at("document.type", "lesson"))
        .then(({ results }) => {
          return results;
        })
        .catch((e) => {
          return e;
        });
    });
  },
};
