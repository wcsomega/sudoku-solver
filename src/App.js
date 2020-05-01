import React from 'react';
import './App.css';

function App() {
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
      elements.push(
        <div className={classes.join(" ")}>
          <span>{" "}</span>
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

export default App;
