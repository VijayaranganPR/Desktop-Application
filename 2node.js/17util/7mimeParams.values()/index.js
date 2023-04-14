/*
Returns an iterator over the values of each name-value pair.
*/

const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');

for (const name of params.values()) {
    console.log(name);
}
/*
0
1
*/