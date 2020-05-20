/** @jsx jsx */

import './global.css';
import React from 'react';
import { List, Range } from 'immutable';
import { solve } from './SudokuSolver.js';
import { css, jsx } from "@emotion/core";
import { Button, Square, Grid, NumButton } from './components.js';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numbers: List(Array(81).fill(0)),
      fixed: List(Array(81).fill(false)),
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
      fixed: this.state.fixed.set(i, value !== 0),
    });
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
    this.setState({
      numbers: List(Array(81).fill(0)),
      fixed: List(Array(81).fill(false)),
      selection: {
        isSelected: false,
        x: 0,
        y: 0
      }
    });
  };

  solvePuzzle = () => {
    let nums = solve(this.state.numbers);
    this.setState({
      numbers: nums,
    })
  };

  onNumButton = (val) => {
    if (this.state.selection.isSelected) {
      this.setAt(this.state.selection.x, this.state.selection.y, val);
    }
  }

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
            fixed={this.state.fixed.get(key)}
          >
            {num === 0 ? "" : num}
          </Square>
        );
      }
    }
    return (
      <div css={{
        textAlign: 'center',
      }}>
        <Grid css={{
          width: '540px',
          height: '540px',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '40px',
          marginBottom: '20px',
          border: '2px solid black',
          borderRadius: '5px',
        }}
        rows={9} columns={9}>
          {elements}
        </Grid>
        <div>
          {Range(1, 10).map(num => <NumButton number={num} onClick={() => this.onNumButton(num)}/>)} 
        </div>
        <Button onClick={this.solvePuzzle}>
          Solve Puzzle
        </Button>
        <Button onClick={this.resetPuzzle}>
          Reset Puzzle
        </Button>
        <Button onClick={() => this.onNumButton(0)}>
          Erase Cell
        </Button>
      </div>
    );
  }
}
