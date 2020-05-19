import styled from 'styled-components';

const TopNavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.topNavHeight};
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.top};
  display: flex;
  justify-content: center;
`;

const TopNav = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.maxWidth.desktop};
  padding: 0 1rem;
`;

export default ({ children }) => (
  <TopNavContainer>
    <TopNav>{children}</TopNav>
  </TopNavContainer>
);