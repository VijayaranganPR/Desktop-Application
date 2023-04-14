/*
Alias for mime.toString().

This method is automatically called when an MIMEType object is serialized with JSON.stringify().
*/

const { MIMEType } = require('node:util');

const myMIMES = [
  new MIMEType('image/png'),
  new MIMEType('image/gif'),
];
console.log(JSON.stringify(myMIMES));
// Prints: ["image/png", "image/gif"]