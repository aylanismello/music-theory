import styled from "styled-components";
import API from "../../helpers/prismic";
import getAllIds from "../../lib/ids";
import InfoContainer from "../../components/shared/InfoContainer";
import Header from "../../components/shared/Header";
import LessonList from "../../components/LessonList";

const ContentContainer = styled.div`
  padding: 2rem;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.sizes.phoneWidth}) {
    margin-top: 1rem;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export default function Course({ course, courseLessons }) {
  const { data } = course;
  const courseName = data.title[0].text;
  const infoHeader = `Learn about ${courseName}`;
  
  return (
    <div>
      <Header>{courseName}</Header>

      <ContentContainer>
        <LessonList lessons={courseLessons} />

        <InfoContainer header={infoHeader}>
          {data.overview}
        </InfoContainer>
      </ContentContainer>
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
  return { props: { course, courseLessons } };
  // Fetch necessary data for the blog post using params.id
}
