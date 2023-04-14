/*
The util.getSystemErrorName(err) method is a part of the Node.js util module. 
It takes an error code as an argument and returns a string representation of the error name. 
The error code should be an integer that is a system error number, such as those returned by the errno module.
*/

const util = require('util');
const errorCode = -1
const errorName = util.getSystemErrorName(errorCode);
console.log(errorName)
// Unknown system error -1