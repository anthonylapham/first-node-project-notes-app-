console.log('Starting notes.js')

const fs = require('fs');

var addNote = function(title, body) {
  var notes = [];
  var note = {
    title: title,
    body: body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (error) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);


  if (duplicateNotes.lenght === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting Note', title);
};

var removeNote = (title) => {
  console.log('Removing Note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
