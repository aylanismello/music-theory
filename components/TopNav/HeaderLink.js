import styled from "styled-components";
import Link from "next/link";

const HeaderLinkContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 22px;
    font-weight: 600;
  }
`;

const HeaderLink = ({children}) => (
  <HeaderLinkContainer>
    <Link href="/">
      {children}
    </Link>
  </HeaderLinkContainer>
);

export default HeaderLink;