import styled from "styled-components";

const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;

export default ({ children }) => <Header>{children}</Header>;
