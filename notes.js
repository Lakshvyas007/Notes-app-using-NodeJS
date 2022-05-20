const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => "Your notes are as follows........"


const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.bold.italic("New note added"));
    } else {
        console.log(chalk.red.bold.italic("Note title already taken!"));
    }
}

const removeNote = (title) => {
    // console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.inverse.bold.red("No notes removed"));
    } else {
        console.log(chalk.inverse.bold.green("Note successfully removed"));
    }
    saveNotes(notesToKeep)
}

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.bold.blue.inverse("Your Notes"));
    notes.forEach(note => {
        console.log(chalk.bold.green(note.title));
        console.log(chalk.italic(note.body));
    });

}
debugger

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)


    if(note){
        console.log(chalk.inverse(note.title));
        console.log((note.body));
    } else{
        console.log(chalk.red.inverse("Note not found"));
    }

}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
};
