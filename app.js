console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const getAll = require('get-all');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', yargs.argv);

// ['where node is installed', 'where is the current file', '', '', '']
// node app.js hello

// process.env.



if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    note.logNotes();
  } else {
    console.log('This note already exists');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read');
    note.logNotes();
  } else {
    console.log('Could not read note.');
  }
} else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title);
  var message = removedNote ? 'The note was removed.' : 'Note not found';
  console.log(message);
} else if (command === 'list') {
  notes.getAll();
} else {
  console.log('Command not recognized');
}
