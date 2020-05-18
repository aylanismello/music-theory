import styled from "styled-components";
import Lesson from './Lesson';


const LessonList = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ lessons }) => (
  <LessonList>
    {lessons.map((lesson) => (
      <Lesson lesson={lesson} />
    ))}
  </LessonList>
);
