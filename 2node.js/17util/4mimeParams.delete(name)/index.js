/*
Remove all name-value pairs whose name is name.
*/

const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');
params.delete('foo')

for (const name of params.entries()) {
    console.log(name);
}

/*
[ 'bar', '1' ]
*/