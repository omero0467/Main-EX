const fs = require ('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// import chalk from 'chalk';

// const {name, add} = require ('./utils.js')

// const {getNotes} = require('./notes.js');

// const validator = require ('validator')
// fs.writeFileSync('notes.text', 'My Name Is Omer evron')

// fs.writeFileSync('notes.js',"'Im a  Fullstack Developer'")

// console.log(name);

// const sum = (add(4,-2))

// console.log(sum);

// console.log(getNotes());
// console.log(validator.isURL('https://omerevron.io'));

// console.log(chalk.blueBright.inverse.bold('Success!'));

// const args = process.argv[2]

// if (args ==='add'){
//     console.log('Note Added');
// // }
// yargs.command({
//     command:'add', 
//     describe: 'Add New Note...',
//     handler: function(){
//         console.log('adding note');
//     },
// })

yargs.command({
    command:'remove', 
    describe: 'remove Note...',
    handler(argv){
        notes.removeNote(argv.title)
    },
})
yargs.command({
    command:'list', 
    describe: 'listing all notes...',
    handler(){
        notes.listNotes()
    },
})
yargs.command({
    command:'read', 
    describe: 'read Note...',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string',
        }
    },
    handler(argv){
       notes.readNote(argv.title)
    },
})

// console.log(yargs.argv);
yargs.command({
    command:'add', 
    describe: 'add new Note...',
    builder:{
        title: {
        describe:'Note Title',
        demandOption: true,
        type:'string',
        },
        body: {
        describe:'body text',
        demandOption: true,
        type:'string',
        },
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        // console.log(argv);
    },
})

yargs.parse()