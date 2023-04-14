/*
Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.

Possible values are 'BE' for big endian and 'LE' for little endian.

*/
const os = require('os')
console.log(os.endianness())  


/*
LE
*/
