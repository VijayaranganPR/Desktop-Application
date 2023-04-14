/*
Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.


*/
const os = require('os')
console.log(os.loadavg())  


/*
[ 0, 0, 0 ]
*/
