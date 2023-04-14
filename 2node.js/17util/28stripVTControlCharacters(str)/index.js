/*
Returns str with any ANSI escape codes removed.
*/


const util = require('util')

console.log(util.stripVTControlCharacters('\u001B[4mvalue\u001B[0m'));
// "value"