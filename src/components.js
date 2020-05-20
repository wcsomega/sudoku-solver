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