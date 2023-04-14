/*
The process.uptime() method returns the number of seconds the current Node.js process has been running.

The return value includes fractions of a second. Use Math.floor() to get whole seconds.

*/

const process = require('process')
console.log(process.uptime())
/*
0.0706985
*/
