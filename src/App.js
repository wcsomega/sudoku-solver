/** @jsx jsx */

import React from 'react';
import { List } from 'immutable';
import { solve } from './SudokuSolver.js';
import { css, jsx } from "@emotion/core";
import './global.css';

const Square = props => (
  <div css={{
    display: 'grid',
    backgroundColor: props.selected ? 'lightskyblue' : 'transparent',
  }}
  {...props}
  >
    <span css={{
      color: props.fixed ? 'blue' : 'black',
      fontSize: 'xx-large',
      userSelect: 'none',
      margin: 'auto',
    }}>
      {props.children}
    </span>
  </div>
);

const Button = props => (
  <button css={css`
    border-radius: 5px;
    color: white;
    background-color: dodgerblue;
    font-size: x-large;
    border: 0px solid transparent;
    padding: 10px 30px;
    margin: 20px 10px;
    text-transform: uppercase;

    &:hover {
      background-color: deepskyblue;
    }
  `}
  {...props}
  >
    {props.children}
  </button>
);

const Grid = props => (
  <div css={css`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    overflow: hidden
  `}
  {...props}
  >
    {props.children}
  </div>
)

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numbers: List(Array(81).fill(0)),
      selection: {
        isSelected: false,
        x: 0,
        y: 0,
      }
    }
  }

  getAt = (x, y) => {
    const i = y * 9 + x;
    return this.state.numbers.get(i);
  };

  setAt = (x, y, value) => {
    const i = y * 9 + x;
    this.setState({
      numbers: this.state.numbers.set(i, value),
    })
  };

  handleClick = (x, y) => {
    this.setState({
      selection: {
        isSelected: true,
        x: x,
        y: y,
      }
    });
  };

  resetPuzzle = () => {
    console.log('reset');
    this.setState({
      numbers: List(Array(81).fill(0)),
    });
  };

  solvePuzzle = () => {
    let nums = solve(this.state.numbers);
    this.setState({
      numbers: nums,
    })
  };

  render() {
    let elements = [];
    for(let y = 0; y < 9; y++) {
      for(let x = 0; x < 9; x++){
        let classes = []
        if (y !== 0) {
          if (y % 3 === 0){
            classes.push(css`border-top: 2px solid black;`);
          } else {
            classes.push(css`border-top: 1px solid grey;`);
          }
        }
        if (x !== 0) {
          if (x % 3 === 0) {
            classes.push(css`border-left: 2px solid black`);
          } else {
            classes.push(css`border-left: 1px solid grey`);
          }
        }
        if (x === 0 && y === 0) {
          // classes.push("rounded-tl");
        }
        if (x === 8 && y === 0) {
          // classes.push("rounded-tr");
        }
        if (x === 0 && y === 8) {
          // classes.push("rounded-bl");
        }
        if (x === 8 && y === 8) {
          // classes.push("rounded-br");
        }
        let key= y*9+x;
        let num = this.getAt(x, y);
        let isSelected = this.state.selection.isSelected &&
          this.state.selection.x === x &&
          this.state.selection.y === y;
        elements.push(
          <Square key={key.toString()}
            onClick={() => this.handleClick(x, y)}
            css={classes}
            selected={isSelected}
          >
            {num === 0 ? "" : num}
          </Square>
        );
      }
    }
    return (
      <div css={css`
        text-align: center;
      `}>
        <Grid css={css`
          width: 540px;
          height: 540px;
          margin-right: auto;
          margin-left: auto;
          margin-top: 40px;
          border: 2px solid black;
          border-radius: 5px;
        `}>
          {elements}
        </Grid>
        <Button onClick={this.solvePuzzle}>
          Solve
        </Button>
        <Button onClick={this.resetPuzzle}>
          Reset
        </Button>
      </div>
    );
  }
}
