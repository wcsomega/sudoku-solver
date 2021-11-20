/**@jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState, useRef, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnClickOutside from "../hooks/useOnClickOutside";
import { setDigit, clearDigit } from '../digitsSlice';
import { RootState } from '../store';

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

type Corner = 'TL' | 'TR' | 'BL' | 'BR' | 'None';

type GridCellProps = {
  selected: boolean,
  index: number,
  corner: Corner,
  onClick?: () => void,
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

const GridCell = (props: GridCellProps) => <div
  onClick={props.onClick}
  css={getGridCellStyle(props.index)}>
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

const wrap = (val: number, min: number, max: number) => {
  if (val < min) {
    return max - (min - val) % (max - min);
  } else if (val >= max) {
    return min + (val - min) % (max - min);
  } else {
    return val;
  }
}

const isNumKey = (key: string) => {
  return !isNaN(+key) && key !== '0';
}

export const SudokuGrid = (props: any) => {
  let refEl = useRef(null);
  let [selectedCell, setSelectedCell] = useState({ x: 0, y: 0 });
  let [isFocused, setIsFocused] = useState(false);
  let nums = useSelector((state: RootState) => state.digits);
  const dispatch = useDispatch();

  useOnClickOutside(refEl, () => setIsFocused(false));

  const keyDownHandler = (e: KeyboardEvent) => {
    if (isFocused) {
      if(isNumKey(e.key)){
        dispatch(setDigit({
          digit: +e.key,
          index: selectedCell.y * 9 + selectedCell.x
        }));
      } else {
        switch (e.key) {
          case 'ArrowRight':
          case 'd':
          setSelectedCell({ ...selectedCell, x: wrap(selectedCell.x + 1, 0, 9) });
            break;
          case 'ArrowLeft':
          case 'a':
            setSelectedCell({ ...selectedCell, x: wrap(selectedCell.x - 1, 0, 9) });
            break;
          case 'ArrowUp':
          case 'w':
            setSelectedCell({ ...selectedCell, y: wrap(selectedCell.y - 1, 0, 9) });
            break;
          case 'ArrowDown':
          case 's':
            setSelectedCell({ ...selectedCell, y: wrap(selectedCell.y + 1, 0, 9) });
            break;
          case 'Delete':
          case 'Backspace':
            dispatch(clearDigit(selectedCell.y * 9 + selectedCell.x));
            break;
        }
      e.preventDefault();
      }
    }
  }

  return (
    <div 
      css={SudokuGridStyle}
      ref={refEl}
      onKeyDown={keyDownHandler}
      tabIndex={-1}
    >
      {
        nums.value.map((num, index) => {
          let corner: Corner = 'None'
          if (index === 0) corner = 'TL';
          if (index === 8) corner = 'TR';
          if (index === 72) corner = 'BL';
          if (index === 80) corner = 'BR';
          return <GridCell
            key={index}
            selected={isFocused && (index === (selectedCell.y * 9 + selectedCell.x))}
            corner={corner}
            index={index}
            onClick={() => {
              setSelectedCell({
                x: index % 9,
                y: Math.trunc(index / 9)
              });
              setIsFocused(true);
            }}
          >{num.value || ''}</GridCell>
        })
      }
    </div>
  )
}