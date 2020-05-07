import React from 'react';
import { List } from 'immutable';
import { solve } from './SudokuSolver.js';
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numbers: List(Array(81).fill(0)),
    }
  }

  getAt = (x, y) => {
    const i = y * 9 + x;
    return this.state.numbers.get(i);
  }

  setAt = (x, y, value) => {
    const i = y * 9 + x;
    this.setState({
      numbers: this.state.numbers.set(i, value),
    })
  }

  handleClick = (x, y) => {
    let num = this.getAt(x, y);
    num += 1;
    num %= 10;
    this.setAt(x, y, num);
  }

  solvePuzzle = () => {
    let nums = solve(this.state.numbers);
    this.setState({
      numbers: nums,
    })
  }

  render() {
    let elements = [];
    for(let y = 0; y < 9; y++) {
      for(let x = 0; x < 9; x++){
        let classes = ["cell"]
        if (y !== 0) {
          if (y % 3 === 0){
            classes.push("border-black-t");
          } else {
            classes.push("border-gray-t");
          }
        }
        if (x !== 0) {
          if (x % 3 === 0) {
            classes.push("border-black-l");
          } else {
            classes.push("border-gray-l");
          }
        }
        if (x === 0 && y === 0) {
          classes.push("rounded-tl");
        }
        if (x === 8 && y === 0) {
          classes.push("rounded-tr");
        }
        if (x === 0 && y === 8) {
          classes.push("rounded-bl");
        }
        if (x === 8 && y === 8) {
          classes.push("rounded-br");
        }
        let key= y*9+x;
        let num = this.getAt(x, y);
        elements.push(
          <div key={key.toString()} className={classes.join(" ")}
            onClick={() => this.handleClick(x, y)}>
            <span>{num === 0 ? "" : num}</span>
          </div>
        );
      }
    }
    return (
      <div className="text-center">
        <div className="grid width-540 height-540 mx-auto mt-40 border-black rounded">
          {elements}
        </div>
        <button className="rounded border-0 text-white color-blue text-xl pa-10 mt-20"
          onClick={this.solvePuzzle}>
          SOLVE
        </button>
      </div>
    );
  }
}
