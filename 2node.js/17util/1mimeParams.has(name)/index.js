/*
Returns true if there is at least one name-value pair whose name is name.
*/

const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');

console.log(params.has('foo'))          // true