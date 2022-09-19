// From function declarations to explicit and implicit
const welcome = () => { 'Welcome to Appleseeds Bootcamp!'}
const power = (a) => {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

// From function expressions to IIFE functions.
(function squareRoot (a) {Math.sqrt(a);})();
(function randomNumbers (a, b) { Math.random() * (a - b) +
b;})();