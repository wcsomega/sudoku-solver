/**@jsxImportSource @emotion/react */

import './global.css';
import { jsx } from '@emotion/react';
import React from 'react';
import { List, Range } from 'immutable';
import { solve } from './SudokuSolver.js';
import { Button, NumButton } from './components.js';
import { SudokuGrid } from './components/SudokuGrid';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numbers: List(Array(81).fill(0)),
      fixed: List(Array(81).fill(false)),
      selection: -1
    }
  }

  deselect = () => {
    this.setState({
      selection: -1
    });
  };

  handleClick = (index) => {
    this.setState({
      selection: index
    });
  };

  resetPuzzle = () => {
    this.setState({
      numbers: List(Array(81).fill(0)),
      fixed: List(Array(81).fill(false)),
      selection: -1
    });
  };

  solvePuzzle = () => {
    let nums = solve(this.state.numbers);
    this.setState({
      numbers: nums,
    })
  };

  onNumButton = (val) => {
    if (this.state.selection !== -1) {
      this.setState({
        numbers: this.state.numbers.set(this.state.selection, val),
        fixed: this.state.fixed.set(this.state.selection, val !== 0)
      })
    }
  }

  render() {
    return (
      <div css={{
        textAlign: 'center',
      }}>
        <SudokuGrid 
          css={{
            width: '540px',
            height: '540px',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '40px',
            marginBottom: '20px',
          }}
          numbers={this.state.numbers}
          fixed={this.state.fixed}
          onSelectCell={this.handleClick}
          selection={this.state.selection}
          onClickOutside={this.deselect}
        />
        <div>
          {Range(1, 10).map(num => <NumButton number={num} key={num} onClick={() => this.onNumButton(num)}/>)} 
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
