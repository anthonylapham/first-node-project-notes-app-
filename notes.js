console.log('Starting notes.js')

module.exports.addNote = ()  => {
  console.log('addNote');
  return 'New note';
};

module.exports.addNumbers = function (a,b){
  console.log('addNumbers');
  return a + b;
}
