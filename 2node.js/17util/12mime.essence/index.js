/*
Gets the essence of the MIME. This property is read only. Use mime.type or mime.subtype to alter the MIME.
*/

const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/javascript;key=value');
console.log(myMIME.essence);
// text/javascript
myMIME.type = 'application';
console.log(myMIME.essence);
// application/javascript
console.log(String(myMIME));
// application/javascript;key=value
