import Head from "next/head";
import React from "react";
const Prismic = require("prismic-javascript");

const apiEndpoint = "https://music-theory.prismic.io/api/v2";

export default function Home() {
  // const lessonsData = lessons.map(l => l.data);
  // console.log(lessonsData[0].title);

  return (
    <div className="container">
      <h1>fuck</h1>
    </div>
  );
}

const getAllLessons = async () => {
  Prismic.getApi(apiEndpoint)
    .then(function (api) {
      return api.query(Prismic.Predicates.at("document.type", "lesson"));
    })
    .then(function ({ results }) {
      console.log('got here');
      // const { data } = results;
      return {
        props: { lessons: results },
      };
    })
    .catch(() => {
      console.log('error');
      return {
        props: {}
      }
    })
};

export async function getStaticProps() {
  const result = await getAllLessons();
  console.log('got back result');
  return result;
}
