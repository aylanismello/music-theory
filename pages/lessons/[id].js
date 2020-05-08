import Lottie from "react-lottie";
import API from "../../helpers/prismic";
import getAllIds from "../../lib/ids";

const defaultOptions = (jsonUrl) => ({
  loop: true,
  autoplay: true,
  // animationData: jsonUrl,
  path: jsonUrl,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

export default function Lesson({ lesson, lessonCells }) {
  return (
    <div>
      <h1>{lesson.data.title[0].text}</h1>
      <h4>Category: {lesson.data.category}</h4>
      {lessonCells.map((cell) => {
        const options = defaultOptions(cell.data.media_animation.url);

        return (
          <div>
            <h5>{cell.data.description}</h5>
            <Lottie options={options} height={400} width={400} />
            <audio controls src={cell.data.media_audio.url} />
          </div>
        );
      })}
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
