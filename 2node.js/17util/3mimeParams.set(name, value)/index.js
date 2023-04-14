/*
Sets the value in the MIMEParams object associated with name to value. 
If there are any pre-existing name-value pairs whose names are name, set the first such pair's value to value.
*/
const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');

params.set('name', 'vijay')

for (const name of params.entries()) {
    console.log(name);
}
/*
[ 'foo', '0' ]
[ 'bar', '1' ]
[ 'name', 'vijay' ]
*/