import Head from "next/head";
import React from "react";
const Prismic = require("prismic-javascript");

const apiEndpoint = "https://music-theory.prismic.io/api/v2";

export default function Home({ lessons }) {
  // console.log(cells);
  console.log(lessons);
  // const lessonsData = lessons.map((l) => l.data);
  // console.log(lessonsData[0]);

  return (
    <div className="container">
      {lessons.map((l) => (
        <div>
          <h5>{l.name}</h5>
          <span>Category: {l.category}</span>
          <br />
          <span>Animation link: {l.animation.url}</span>
          <h5>Cell Info</h5>
          {l.cells.map((c) => (
            <div>
              <div> {c.frame} </div>

              <div>
                {" "}
                <span>Audio for this cell: </span>
                {c.audio.url}
              </div>
              {/* <div> {c.} </div> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const getAllCells = async (lessonId) => {
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
};

const getAllLessons = async () => {
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
};

const getAllData = async () => {
  const id = "Xqk3GREAACMAf3RW";
  let lessons = await getAllLessons();
  // console.log(lessons);

  for (let i = 0; i < lessons.length; i++) {
    let cellsForLesson = await getAllCells(id);
    cellsForLesson = cellsForLesson.map((c) => c.data);

    lessons[i] = {
      ...lessons[i].data,
      cells: cellsForLesson,
    };
  }

  return {
    props: { lessons },
  };
};

export async function getStaticProps() {
  let result = { props: {} };
  try {
    result = await getAllData();
  } catch (e) {
    console.log("error");
  }
  return result;
}
