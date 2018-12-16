'use strict';

let closure = function(y) {
    return function(x) {
        return Math.pow(x, y);
    }
};

const square = closure(2);
const cube = closure(3);

console.log(square(5));
console.log(square(2));
console.log(cube(5));
console.log(cube(2));
