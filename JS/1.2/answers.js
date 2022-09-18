/*
1. Which of the following is/are strings?
c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4

3. Which of the following is/are booleans?
a) true
b) false

4. What is the result of 80 + 71.2?
a) 151.2

5. What is the result of "80" + 71.2?
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number

7. Does "100" + 30 produce a number or a string?
b)string


*/

//create three different ways to declare variables
const dog = 'Husky'
let num = 5
var good = true
//declare a variable and reassign a value to it
num = 6
//create a variable and after that assign a string
let str = "He's got it!"
/*
1. create a variable and assign a value on how
much a restaurant bill is.
*/

const bill = 600
// 2. create a variable and assign a value on how
// much tax they should pay.

const tax = 0.14;
/*
3. create a variable that will calculate the bill
tax and its output would be: Your total bill is
<total bill> $.
*/
let totalBill = (bill*tax) + bill;
console.log(totalBill);
// Round the number 50.6 to its nearest integer
Math.floor(50.6);
//Create a variable that is undefined
var God
