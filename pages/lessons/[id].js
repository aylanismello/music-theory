import API from "../../helpers/prismic";
import { getAllIds } from "../../lib/ids";

export default function Lesson({ lesson, lessonCells }) {
  console.log(lessonCells);

  return (
    <div>
      <h1>{lesson.data.title[0].text}</h1>
      <h4>Category: {lesson.data.category}</h4>
      {lessonCells.map((cell) => (
        <div>
          <h5>{cell.data.description}</h5>
          <audio controls src={cell.data.media_audio.url} />
        </div>
      ))}
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
  const lesson = await API.getDocumentById(id);
  const lessonCells = await API.getAllCellsForLesson(id);

  return { props: { lesson, lessonCells } };
}
