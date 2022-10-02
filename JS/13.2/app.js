const foods = ["falafel","sabich","hummus","pizza with extra pineapple"];

//a.1
const myarr = foods.slice().sort()
console.log(myarr);
//a.2
const myarr2 = foods.slice().sort().reverse()
console.log(myarr2);

//b.1
const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple",];
const myarr3 = foodsWithUpperCase.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
console.log(myarr3)
//b.2
const myarr4 = foodsWithUpperCase.sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0))
console.log(myarr4)

const words = ["apple","supercalifragilisticexpialidocious","hi","zoo"];
const myarr5 = words.sort((a,b) => b.length - a.length)
console.log(myarr5);
