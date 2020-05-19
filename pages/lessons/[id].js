import { useState } from "react";
import styled from 'styled-components';
import API from "../../helpers/prismic";
import getAllIds from "../../lib/ids";
import CellList from '../../components/CellList';
import MediaScreen from '../../components/MediaScreen';


const LessonPage = styled.div``;

export default function Lesson({ lesson, lessonCells }) {

  const [selectedCell, selectCell] = useState(null);

  const orderedCells = lessonCells.sort((a, b) => {
    return a.data.index - b.data.index;
  });
  // console.log(selectedCell);

  return (
    <LessonPage>
      {/* <h1>{lesson.data.title[0].text}</h1>
      <h4>Category: {lesson.data.category}</h4> */}
      <MediaScreen
        selectedCell={selectedCell}
        cellName={selectedCell && selectedCell.data.media_animation_name}
      />
      <CellList lessonCells={orderedCells} selectCell={selectCell} />
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
