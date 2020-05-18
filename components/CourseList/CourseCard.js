import styled from "styled-components";
import Link from "next/link";

const CourseCardContainer = styled.div`
  box-shadow: -4px -4px 4px #ffffff, 4px 4px 4px rgba(0, 0, 0, 0.4);
  background: #c4c4c4;
  height: 300px;
  width: 300px;
  &:hover {
    cursor: pointer;
  }
`;

export default ({ course }) => {
  return (
    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
      <CourseCardContainer>{course.data.title[0].text}</CourseCardContainer>
    </Link>
  );
};
