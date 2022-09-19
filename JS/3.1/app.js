const welcome = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }
   const power = (a) =>{
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
    }
  const add = (a, b = 5) => {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
    }
    // From function expressions to function declarations
    function hello() {"Hello!"};
    function squareRoot( a){ return Math.sqrt(a)};
    function randomNumbers (a, b) {Math.random() * (a - b) + b;}