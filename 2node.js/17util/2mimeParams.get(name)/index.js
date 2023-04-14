/*
Returns the value of the first name-value pair whose name is name. If there are no such pairs, null is returned.
*/

const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');

console.log(params.get('foo'))      // 0