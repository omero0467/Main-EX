const fs = require('fs')
const { dirname } = require('path')

fs.writeFileSync('note.text', 'Hi my name is Omer')
fs.copyFileSync('note.text', 'note2.text')
fs.renameSync('note2.text','note2Rename.text')
console.log(fs.readdirSync(__dirname))
fs.mkdirSync('./newDir')