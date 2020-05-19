import styled from "styled-components";

const CellContainer = styled.div`
  background: linear-gradient(0deg, #eeeeee, #eeeeee);
  /* Neumorphism */

  box-shadow: -4px -4px 4px #ffffff, 4px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 16px;

  /* text-align: center; */
  padding: 1rem;
  /* max-width: 300px; */
  height: fit-content;

  &:hover {
    cursor: pointer;
  }

  /* @media (max-width: ${({ theme }) => theme.sizes.phoneWidth}) {
    margin-bottom: 2rem;
  } */
`;

export default ({ cell, selectCell }) => (
  <CellContainer onClick={() => selectCell(cell)}>
    <h5>{cell.data.description}</h5>
    <audio src={cell.data.media_audio.url} />
  </CellContainer>
);
