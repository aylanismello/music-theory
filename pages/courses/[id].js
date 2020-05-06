import API from '../../helpers/prismic';
import Link from "next/link";
import { getAllIds } from "../../lib/ids";
import styled from 'styled-components';

const MyLink = styled.div`
  color: #850353;
  background: whitesmoke;
  &:hover {
    cursor: pointer;
  }
`;

export default function Course({ course, courseLessons }) {
  // console.log(course);
  
  return (
    <div>
      <h3>{course.data.title[0].text}</h3>

      <h5>Lessons:</h5>
      <ul>
        {courseLessons.map((lesson) => (
          <MyLink>
            <Link href="/lessons/[id]" as={`/lessons/${lesson.id}`}>
              <li>{lesson.data.title[0].text}</li>
            </Link>
          </MyLink>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllIds();

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const { id } = params;
  const course = await API.getDocumentById(id);
  const courseLessons = await API.getAllLessonsForCourse(id);
  // console.log(courseLessons);

  return { props: { course, courseLessons } };
  // Fetch necessary data for the blog post using params.id
}