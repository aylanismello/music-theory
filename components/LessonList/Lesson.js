import styled from "styled-components";
import Link from "next/link";
import { NoteIcon } from "../shared/Icons";


const LinkContainer = styled.div`
  /* border: 1px solid red; */
  padding-bottom: 2rem;
`;

const LessonContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const LessonText = styled.div`
  font-weight: 600;
  text-align: center;
`;

const LessonCircle = styled.div`
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  box-shadow: -4px -4px 4px #ffffff, 4px 4px 4px rgba(0, 0, 0, 0.4);
  width: 114px;
  height: 114px;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export default ({ lesson }) => (
  <LinkContainer>
    <Link href="/lessons/[id]" as={`/lessons/${lesson.id}`}>
      <LessonContainer>
        <LessonCircle>
          <NoteIcon width={50} />
        </LessonCircle>
        <LessonText>{lesson.data.title[0].text}</LessonText>
      </LessonContainer>
    </Link>
  </LinkContainer>
);
