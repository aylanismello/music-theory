import Head from "next/head";
import React from "react";
import Link from "next/link";
import API from "../helpers/prismic";

export default function Home({ courses }) {
  // console.log(cells);
  // console.log(courses);
  // const lessonsData = lessons.map((l) => l.data);
  // console.log(lessonsData[0]);

  return (
    <div className="container">
      <h1>
        Course Lists
      </h1>
      {courses.map((course) => {
        const overview = course.data.overview;
        const title = course.data.title && course.data.title[0].text;
        return (
          <button>
            <Link href="/courses/[id]" as={`/courses/${course.id}`}>
              <div>
                <h5>{title}</h5>
                <h6>{overview}</h6>
              </div>
            </Link>
          </button>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  let results;
  try {
    results = await API.getAllCourses();
  } catch (e) {
    console.log("error");
  }
  return { props: { courses: results } };
}
