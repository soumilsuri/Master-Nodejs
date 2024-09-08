const fs = require('fs');

// Write a file
fs.writeFileSync('example.txt', 'Hello, World!');
console.log('File has been written!');

// Read a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// apend a file
fs.appendFileSync('example.txt', ' Appending some text!');
console.log('File has been updated!');

// unlink(delete) a file
fs.unlinkSync('example.txt');
console.log('File deleted!');