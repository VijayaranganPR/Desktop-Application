/*
The process.stdout property in Node.js is a writable stream that represents the standard output of the current process. The standard output is typically connected to the console or terminal window where the Node.js script is running.

*/

const process = require('process')

process.stdout.write('Hello world!')
/*
Hello world!
*/
