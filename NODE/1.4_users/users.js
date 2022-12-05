'Im a  Fullstack Developer'
const chalk = require('chalk')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const addUser = (title, email) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((item) => item.title === title)
    
    if (!duplicateNote) {
        
        const id = uuidv4()
        notes.push({
            id,
            title,
            email
        })

        saveNotes(notes)

        console.log(chalk.green.inverse('New User Added...'));
    } else {
        console.log(chalk.red.inverse('User Title Taken!'));
    }

}

const readUser = (id) => {
    const notes = loadNotes();
    const note = notes.find((item) => item.id === id)
    if (note) {
        console.log(chalk.blue.inverse(note.title));
        console.log(note);
    } else {
        console.log(chalk.red.inverse('No Users found!'));
    }
}

const listUsers = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('All Users'))

    notes.forEach(element => {
        console.log(chalk.bgMagenta(element.title));
    });
}

const removeUser = (id) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((item) => {
        return item.id !== id
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('User Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No User Found'));
    }
}

const updateUser = (id,title,email) =>{
    const notes = loadNotes();
    const note = notes.find((item) => item.id === id)
    let itemIndex;
    if (note) {
        // notes[notes.indexOf(note.id)]
        saveNotes(notes.map((item,index)=>{
            if (item.id===id){
                itemIndex=index
              return{
                ...item, title:title,email:email
              }
            } return item
        }))
        console.log(chalk.blue.inverse('User Updated'))
    } else {
        console.log(chalk.red.inverse('No user found!'));
    }
    console.log(notes[itemIndex]);
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);

    } catch (error) {
        console.log(error);
        return []
    }

}

// console.log(addUser());

module.exports = {
    addUser,
    removeUser,
    listUsers,
    readUser,
    updateUser,
}