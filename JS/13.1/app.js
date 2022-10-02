const numbers = [1, -5, 666, 2, 400, 11];
const ascending = numbers.slice().sort((a,b) => a-b )
const descending = numbers.slice().sort((a,b) => b-a )
console.log(ascending)
console.log(descending)