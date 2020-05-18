import React from "react";
import styled from "styled-components";
import API from "../helpers/prismic";
import CourseList from "../components/CourseList";
import Header from '../components/shared/Header';


const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Home({ courses }) {
  return (
    <HomeContainer>
      <Header>What do you want to learn?</Header>
      <CourseList courses={courses} />
    </HomeContainer>
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
