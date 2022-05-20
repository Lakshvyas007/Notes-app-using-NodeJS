const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

debugger
// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.addNote(argv.title, argv.body)
        // console.log("Adding a new note", argv);
        // console.log('Title: ' + argv.title+"\nBody: " + argv.body);
})


// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.removeNote(argv.title)
        // console.log(chalk.red.bold.inverse("Removing a note"));
})

// Create list command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler: ()=> notes.listNote()
    
})
debugger
// Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.readNote(argv.title)
    })

yargs.parse() // console.log(yargs.argv);

