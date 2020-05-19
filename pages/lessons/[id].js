import styled from 'styled-components';
import API from "../../helpers/prismic";
import getAllIds from "../../lib/ids";
import CellList from '../../components/CellList';


const LessonPage = styled.div``;

export default function Lesson({ lesson, lessonCells }) {

  const orderedCells = lessonCells.sort((a, b) => {
    return a.data.index - b.data.index;
  });

  return (
    <LessonPage>
      {/* <h1>{lesson.data.title[0].text}</h1>
      <h4>Category: {lesson.data.category}</h4> */}
      <CellList lessonCells={orderedCells} />
    </LessonPage>
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
  const lesson = await API.getDocumentById(id);
  const lessonCells = await API.getAllCellsForLesson(id);

  return { props: { lesson, lessonCells } };
}
