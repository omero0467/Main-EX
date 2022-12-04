const fs = require ('fs')
const chalk = require('chalk')
// import chalk from 'chalk';

const {name, add} = require ('./utils.js')

const {getNotes} = require('./notes.js');

const validator = require ('validator')
fs.writeFileSync('notes.text', 'My Name Is Omer evron')

fs.writeFileSync('notes.js',"'Im a  Fullstack Developer'")

console.log(name);

const sum = (add(4,-2))

console.log(sum);

console.log(getNotes());
console.log(validator.isURL('https://omerevron.io'));

console.log(chalk.blue.bgGreen.bold('Success!'));