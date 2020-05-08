import styled from "styled-components";
import TopNav from "../TopNav";

const Content = styled.div`
  padding: 2rem;
  margin-top: ${({ theme }) => theme.topNavHeight};
`;

const MyLayout = ({ children }) => (
  <>
    <TopNav />
    <Content>{children}</Content>
  </>
);

export default MyLayout;
