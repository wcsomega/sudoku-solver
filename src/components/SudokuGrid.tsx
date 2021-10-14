/**@jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const SudokuGridStyle = css({
  // border: '1px solid black',
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 50px)',
  gridTemplateRows: 'repeat(9, 50px)',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
  // border: '1px solid red',
  borderBottom: '1px solid red',
  borderRight: '1px solid red',
  color: 'white',
});

type Corner = 'TL' | 'TR' | 'BL' | 'BR'

type GridCellProps = {
  selected: boolean,
  corner?: Corner,
  children?: React.ReactNode,
}

const GridCellSelectionStyle = (selected: boolean, corner?: Corner) => css({
  borderStyle: 'solid',
  borderWidth: '3px',
  borderColor: selected ? 'blue' : 'transparent',
  height: '100%',
  boxSizing: 'border-box',
  borderTopLeftRadius: corner === 'TL' ? '10px' : '0px',
  borderTopRightRadius: corner === 'TR' ? '10px' : '0px',
  borderBottomLeftRadius: corner === 'BL' ? '10px' : '0px',
  borderBottomRightRadius: corner === 'BR' ? '10px' : '0px',
})

const GridCell = ({children, selected}: GridCellProps) => <div css={GridCellStyle}>
  <div css={GridCellSelectionStyle(selected)}>
    {children}
  </div>
</div>

export const SudokuGrid = (props: any) => <div css={SudokuGridStyle}>
  {nums.map(num => <GridCell selected={false}>{num}</GridCell>)}
</div>