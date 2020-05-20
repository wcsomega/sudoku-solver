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
          {this.state.numbers.map((number, index) => {
            const x = index % 9;
            const y = Math.trunc(index / 9);
            return (
              <Square
                onClick={() => this.handleClick(x, y)}
                selected={this.state.selection.isSelected && this.state.selection.x === x && this.state.selection.y === y}
                fixed={this.state.fixed.get(index)}
                css={{
                  borderTop: y === 0 ? '0px solid transparent' : y % 3 === 0 ? '2px solid black' : '1px solid grey',
                  borderLeft: x === 0 ? '0px solid transparent' : x % 3 === 0 ? '2px solid black' : '1px solid grey'
                }}
              >
                { number === 0 ? "" : number }
              </Square>
          )})}
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
