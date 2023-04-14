/*
The path.delimiter in Node.js is a constant string that represents the platform-specific delimiter used in the PATH environment variable to separate entries. 
It is used to separate directories in the PATH variable, which is used by the operating system to determine where to look for executables.

On Windows, path.delimiter is equal to ;, while on Unix-based systems, it is equal to :.
*/

const path = require('path')

console.log(path.delimiter)     // ;

/*
;
*/