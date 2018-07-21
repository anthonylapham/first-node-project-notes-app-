// var obj = {
//   name: 'Anthony'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

//
// var personString = '{"name": "Anthony", "age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Title',
  body: 'Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
