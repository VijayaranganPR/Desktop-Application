/*
The util.getSystemErrorMap() method is part of the Node.js util module. 
It returns an object that maps system error codes to their string representations. 
The error codes are negative integers, as they are based on the errno system error codes from the underlying operating system. 
The string representations of the error codes are human-readable descriptions of the error, such as EACCES for "Permission denied".
*/

const util = require('util');

const errorCode = -1;
const errorMap = util.getSystemErrorMap();
const errorName = errorMap[errorCode] || 'UNKNOWN';
console.log(errorName); // 'UNKNOWN'
