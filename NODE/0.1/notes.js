'Im a  Fullstack Developer'
const chalk = require('chalk')
 const fs = require('fs')

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((item)=>{
        return item.title!==title
    })

    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found'));
    }
}

const addNote =  (title,body) =>{
const notes = loadNotes()

const duplicateNote = notes.find((item)=>item.title===title)

if(!duplicateNote){
    
    notes.push({
        title,
        body
    })
    
    saveNotes(notes)

    console.log(chalk.green.inverse('New Note Added...'));
}else{
    console.log(chalk.red.inverse('Note Title Taken!'));
}

}

const readNote = (title)=>{
    const notes = loadNotes();
    const note = notes.find((item)=>item.title===title)
    if(note){
        console.log(chalk.blue.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = (notes) =>{
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes'))

    notes.forEach(element => {
        console.log(chalk.bgMagenta(element.title));
    });
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

// console.log(addNote());

module.exports={
    addNote,
    removeNote,
    listNotes,
    readNote,
}