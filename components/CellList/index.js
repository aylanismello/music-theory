import styled from "styled-components";
import Cell from './Cell';

const CellList = styled.div`
  padding-top: 400px;
`;

export default ({ lessonCells, selectCell }) => (
  <CellList>
    {lessonCells.map((cell) => (
      // const options = defaultOptions(cell.data.media_animation.url);
      <Cell cell={cell} selectCell={selectCell} />
    ))}
  </CellList>
);
