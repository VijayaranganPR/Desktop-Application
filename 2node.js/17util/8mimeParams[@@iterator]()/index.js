/*
Alias for mimeParams.entries().
*/

const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');

for (const name of params) {
    console.log(name);
}

/*
[ 'foo', '0' ]
[ 'bar', '1' ]
*/