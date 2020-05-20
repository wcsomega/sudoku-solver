/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Square = ({selected, fixed, children, ...rest}) => (
  <div css={{
    display: 'grid',
    backgroundColor: selected ? 'lightskyblue' : 'transparent',
    '&:hover': {
      backgroundColor: selected ? 'lightskyblue' : 'aliceblue',
    },
  }}
  {...rest}
  >
    <span css={{
      color: fixed ? 'black' : 'darkgray',
      fontSize: 'xx-large',
      userSelect: 'none',
      margin: 'auto',
    }}>
      {children}
    </span>
  </div>
);

export const Button = ({children, ...rest}) => (
  <button css={{
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'dodgerblue',
    fontSize: 'x-large',
    border: '0px solid transparent',
    padding: '10px 30px',
    margin: '20px 10px',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: 'deepskyblue',
    }
  }}
  {...rest}
  >
    {children}
  </button>
);

export const Grid = ({rows, columns, children, ...rest}) => (
  <div css={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    overflow: 'hidden',
  }}
  {...rest}
  >
    {children}
  </div>
);

export const SudokuGrid =({numbers, fixed, selection, onSelectCell, ...rest}) => (
  <Grid rows={9} columns={9}
    css={{
      border: '2px solid black',
      borderRadius: '5px'
    }}
    {...rest}
  >
    {numbers.map((number, index) => {
      const x = index % 9;
      const y = Math.trunc(index / 9);
      return (
        <Square
          onClick={() => onSelectCell(index)}
          css={{
            borderTop: y === 0 ? '0px solid transparent' : y % 3 === 0 ? '2px solid black' : '1px solid grey',
            borderLeft: x === 0 ? '0px solid transparent' : x % 3 === 0 ? '2px solid black' : '1px solid grey'
          }}
          selected={selection === index}
          fixed={fixed.get(index)}
          key={index}
        >
          { number === 0 ? '' : number }
        </Square>
    )})}
  </Grid>
)

export const NumButton = ({number, ...rest}) => (
  <button
    css={{
        borderRadius: '5px',
        width: '50px',
        height: '50px',
        fontSize: 'x-large',
        border: '1px solid lightgrey',
        backgroundColor: 'whitesmoke',
        margin: '2px',
    }}
    {...rest}
  >
    {number}
  </button>
);