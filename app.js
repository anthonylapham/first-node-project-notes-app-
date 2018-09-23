const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const getAll = require('get-all');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'The title of the note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'The body of the note.',
  demand: true,
  alias: 'b'
};

const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'Lists all notes')
  .command('read', 'Reading original notes', {
    title: titleOptions
  })
  .command('remove', 'Removes all notes', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', yargs.argv);



if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNotes(note);
  } else {
    console.log('This note already exists');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read');
    notes.logNotes(note);
  } else {
    console.log('Could not read note.');
  }
} else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title);
  var message = removedNote ? 'The note was removed.' : 'Note not found';
  console.log(message);
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNotes(note));
} else {
  console.log('Command not recognized');
}