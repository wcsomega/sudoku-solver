import React from 'react';
import { List } from 'immutable';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let nums = List(Array(81).fill(""));
    this.state = {
      numbers: nums,
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
    const num = Math.floor(Math.random() * 9 + 1);
    this.setAt(x, y, num);
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
        elements.push(
          <div key={key.toString()} className={classes.join(" ")}
            onClick={() => this.handleClick(x, y)}>
            <span>{this.getAt(x, y)}</span>
          </div>
        );
      }
    }
    return (
      <div className="grid width-540 height-540 mx-auto mt-40 border-black rounded">
        {elements}
      </div>
    );
  }
}
