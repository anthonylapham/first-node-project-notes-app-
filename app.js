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
  notes.addNote(argv.title, argv.body);
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'list') {
  notes.getAll();
} else {
  console.log('Command not recognized');
}
