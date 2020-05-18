import styled from "styled-components";

const CourseListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 3rem;
  padding: 2rem;
  justify-items: center;
  max-width: 900px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.sizes.phoneWidth}) {
    grid-template-columns: repeat(1, auto);
  }
`;

export default ({ children }) => (
  <CourseListContainer>{children}</CourseListContainer>
);
