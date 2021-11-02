/**@jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const gridBg = 'rgb(48, 48, 48)'
const selectedCellBorderColor = '#006600'

const SudokuGridStyle = css({
  border: '2px solid black',
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 50px)',
  gridTemplateRows: 'repeat(9, 50px)',
  justifyContent: 'center',
  backgroundColor: gridBg,
  width: 'fit-content',
  borderRadius: '10px',
  margin: 'auto',
  color: 'white',
  fontSize: '30px',
  userSelect: 'none',
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

let selection = 0;

type Corner = 'TL' | 'TR' | 'BL' | 'BR' | 'None';

type GridCellProps = {
  selected: boolean,
  index: number,
  corner: Corner,
  children?: React.ReactNode,
}

const GridCellSelectionStyle = css({
  borderStyle: 'solid',
  borderWidth: '3px',
  borderColor: 'transparent',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  // verticalAlign: 'middle'
});

const SelectedStyle = css({
  borderColor: selectedCellBorderColor,
})

const TLCorner = css({
  borderTopLeftRadius: '10px',
})
const TRCorner = css({
  borderTopRightRadius: '10px',
})
const BLCorner = css({
  borderBottomLeftRadius: '10px',
})
const BRCorner = css({
  borderBottomRightRadius: '10px',
})

const getCornerStyle = (corner: Corner) => {
  if (corner === 'None') return false;
  if (corner === 'TL') return TLCorner;
  if (corner === 'TR') return TRCorner;
  if (corner === 'BL') return BLCorner;
  if (corner === 'BR') return BRCorner;
}

const GridCell = (props: GridCellProps) => <div css={getGridCellStyle(props.index)}>
  <div css={[
    GridCellSelectionStyle,
    props.selected && SelectedStyle,
    getCornerStyle(props.corner)
  ]}>
    {props.children}
  </div>
</div>

const getGridCellStyle = (index: number) => {
  const x = index % 9;
  const y = Math.trunc(index / 9);

  let rightBorderThickness = 0;
  if (x < 8) {
    if (x % 3 === 2) {
      rightBorderThickness = 2;
    } else {
      rightBorderThickness = 1;
    }
  }

  let bottomBorderThickness = 0;
  if (y < 8) {
    if (y % 3 === 2) {
      bottomBorderThickness = 2;
    } else {
      bottomBorderThickness = 1;
    }
  }

  return css({
    borderColor: 'black',
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: rightBorderThickness,
    borderBottomWidth: bottomBorderThickness,
  })
}

export const SudokuGrid = (props: any) => {

  return <div css={SudokuGridStyle}>
    {
      /* {nums.map(num => <GridCell selected={false}>{num}</GridCell>)} */
      nums.map((num, index) => {
        let corner: Corner = 'None'
        if (index === 0) corner = 'TL';
        if (index === 8) corner = 'TR';
        if (index === 72) corner = 'BL';
        if (index === 80) corner = 'BR';
        return <GridCell 
          key={index}
          selected={ index === selection }
          corner={ corner }
          index={index}
        >{ num }</GridCell>
      })
    }
  </div>
}