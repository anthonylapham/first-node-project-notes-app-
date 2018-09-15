console.log('Starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = function(title, body) {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);


  if (duplicateNotes.lenght === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
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
