/*
Gets and sets the subtype portion of the MIME.
*/
const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/ecmascript');
console.log(myMIME.subtype);
// ecmascript
myMIME.subtype = 'javascript';
console.log(myMIME.subtype);
// javascript
console.log(String(myMIME));
// text/javascript
