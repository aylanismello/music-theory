import styled from "styled-components";

const TopNav = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.topNavHeight};
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.top};
`;

export default TopNav;
