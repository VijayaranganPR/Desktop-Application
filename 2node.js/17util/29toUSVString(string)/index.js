/*
Returns the string after replacing any surrogate code points (or equivalently,
any unpaired surrogate code units) with the Unicode "replacement character" U+FFFD.
*/

const util = require('util');

let string = 'Hello, World!';
let usvString = util.toUSVString(string);

console.log(usvString);         // Hello, World!