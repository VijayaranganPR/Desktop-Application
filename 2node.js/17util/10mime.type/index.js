/*
Gets and sets the type portion of the MIME.
*/

const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/javascript');
console.log(myMIME.type);
// text
myMIME.type = 'application';
console.log(myMIME.type);
// application
console.log(String(myMIME));
// application/javascript