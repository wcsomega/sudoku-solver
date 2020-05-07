import {get, set} from 'immutable';


// should call itself recursively
// every iteration finds first open cell
// then, starting with the number 1 and counting up to 9
// a number is checked. if it is valid, call solve again
// if none of the numbers checked are valid, function should
// return and then the "previous" iteration continues from
// where it left off. 
export function solve(numbers) {
    //find first open cell
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (getAt(numbers, x, y) === 0){
                //count up from 1 to 9
                for(let val = 1; val < 10; val++){
                    if(checkValidity(numbers, x, y, val)) {
                        let sol = solve(setAt(numbers, x, y, val));
                        if (sol !== null) {
                            return sol;
                        }
                    }
                }
                // if nothing fits, return null
                return null;
            }
        }
    }
    return numbers;
}

function checkValidity(numbers, x, y, value) {
    return checkRow(numbers, y, value)
        && checkColumn(numbers, x, value)
        && checkSquare(numbers, x, y, value); 
}

function checkSquare(numbers, x, y, value) {
    const squareX = Math.floor(x/3)*3;
    const squareY = Math.floor(y/3)*3;
    for (let iy = 0; iy < 3; iy++) {
        for (let ix = 0; ix < 3; ix++){
            let cellVal = getAt(numbers, squareX + ix, squareY + iy);
            if (cellVal !== 0 && value === cellVal) {
                return false;
            }
        }
    }
    return true;
}

function checkColumn(numbers, x, value) {
    for (let i = 0; i < 9; i++) {
        let cellVal = getAt(numbers, x, i)
        if (cellVal !== 0 && value === cellVal) {
            return false;
        }
    }
    return true;
}

function checkRow (numbers, y, value) {
    for (let i = 0; i < 9; i++) {
        let cellVal = getAt(numbers, i, y);
        if (cellVal !== 0 && value === cellVal){
            return false;
        }
    }
    return true;
}

function getAt(numbers, x, y) {
    return get(numbers, 9*y+x);
}

function setAt(numbers, x, y, value) {
    return set(numbers, 9*y+x, value);
}