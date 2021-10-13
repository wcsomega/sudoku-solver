/**@jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const SudokuGridStyle = css({
  border: '1px solid black',
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 50px)',
  gridTemplateRows: 'repeat(9, 50px)',
  justifyContent: 'center',
});

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  2, 3, 4, 5, 6, 7, 8, 9, 1,
  3, 4, 5, 6, 7, 8, 9, 1, 2,
  4, 5, 6, 7, 8, 9, 1, 2, 3,
  5, 6, 7, 8, 9, 1, 2, 3, 4,
  6, 7, 8, 9, 1, 2, 3, 4, 5,
  7, 8, 9, 1, 2, 3, 4, 5, 6,
  8, 9, 1, 2, 3, 4, 5, 6, 7,
  9, 1, 2, 3, 4, 5, 6, 7, 8,
];

const GridCellStyle = css({
  border: '1px solid red',
});

type GridCellProps = {
  children?: React.ReactNode,
}

const GridCell = ({children}: GridCellProps) => <div css={GridCellStyle}>
  {children}
</div>

export const SudokuGrid = (props: any) => <div css={SudokuGridStyle}>
  {nums.map(num => <GridCell>{num}</GridCell>)}
</div>