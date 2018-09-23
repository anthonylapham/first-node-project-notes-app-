console.log('Starting notes.js')

const fs = require('fs');

//function that gets notes from notes-data.json and turn them into strings
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
    //if the note does not exist, it returns an empty array
  } catch (error) {
    return [];
  }
}

//function that saves and turns existing notes (from notes-data file) into strings
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = function(title, body) {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  //checks for duplicate notes by seeing if the titles match
  var duplicateNotes = notes.filter((note) => note.title === title);


  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

//this pulls all the notes from the notes-data file for our list command
var getAll = () => {
  return fetchNotes();
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting Note', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  //fetchNotes
  var notes = fetchNotes();
  //filter notes, removing one with title argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  //save notes
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNotes = (note) => {
  console.log('--');
  console.log('Title:' + note.title);
  console.log('Body:' + note.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNotes,
  fetchNotes,
  saveNotes,
};