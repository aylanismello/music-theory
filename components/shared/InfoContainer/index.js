import styled from "styled-components";

const InfoContainerStyle = styled.div`
  background: linear-gradient(0deg, #eeeeee, #eeeeee);
  /* Neumorphism */

  box-shadow: -4px -4px 4px #ffffff, 4px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 16px;

  text-align: center;
  padding: 1rem;
  max-width: 300px;
  height: fit-content;
  
  @media (max-width: ${({ theme }) => theme.sizes.phoneWidth}) {
    margin-bottom: 2rem;
  }
`;


const Header = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
`;

const Description = styled.div`

`;

export default ({ header, children }) => (
  <InfoContainerStyle>
    <Header>{header}</Header>
    <Description>{children}</Description>
  </InfoContainerStyle>
);