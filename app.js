console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes =require('./notes.js');

var res = notes.addNote();
console.log(res);

var math = notes.addNumbers(5,10);
console.log(math);

// var user= os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`)
