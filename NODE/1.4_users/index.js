const fs = require ('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const users = require('./users.js')

//create
yargs.command({
    command:'add', 
    describe: 'add new User...',
    builder:{
        title: {
        describe:'User Title',
        demandOption: true,
        type:'string',
        },
        email: {
        describe:'email text',
        demandOption: true,
        type:'string',
        },
    },
    handler(argv){
        users.addUser(argv.title,argv.email)
        // console.log(argv);
    },
})
//read
yargs.command({
    command:'read', 
    describe: 'read User...',
    builder:{
        id:{
            describe:'User id',
            demandOption: true,
            type:'string',
        }
    },
    handler(argv){
        users.readUser(argv.id)
    },
})
//update
yargs.command({
    command:'update', 
    describe: 'update User...',
    builder:{
        title:{
            describe:'User Title',
            demandOption: true,
            type:'string',
        }, 
        email: {
            describe:'email text',
            demandOption: true,
            type:'string',
            },
    },
    handler(argv){
        users.updateUser(argv.id,argv.title,argv.email)
    },
})
//list
yargs.command({
    command:'list', 
    describe: 'listing all users...',
    handler(){
        users.listUsers()
    },
})
//delete
yargs.command({
    command:'remove', 
    describe: 'remove User...',
    handler(argv){
        users.removeUser(argv.id)
    },
})
// console.log(yargs.argv);

yargs.parse()