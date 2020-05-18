import styled from "styled-components";
import TopNav from "../TopNav";

const ContentContainer = styled.div`
  border: ${({ theme }) => (theme.debug.borders ? '1px solid black' : '')};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  border: ${({ theme }) => (theme.debug.borders ? "1px solid red" : "")};
  width: ${({ theme }) => theme.maxWidth.desktop};
  max-width: ${({ theme }) => theme.maxWidth.desktop};
  padding: 3rem 1rem;
  margin-top: ${({ theme }) => theme.topNavHeight};
  /* display */
`;

const MyLayout = ({ children }) => (
  <>
    <TopNav />
    <ContentContainer>
      <Content>{children}</Content>
    </ContentContainer>
  </>
);

export default MyLayout;
