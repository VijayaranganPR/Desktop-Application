/*
Returns an iterator over each of the name-value pairs in the parameters. Each item of the iterator is a JavaScript Array. 
The first item of the array is the name, the second item of the array is the value.
*/

const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');

for (const name of params.entries()) {
    console.log(name);
}
/*
[ 'foo', '0' ]
[ 'bar', '1' ]
*/