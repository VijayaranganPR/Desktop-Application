/*
The util.format method in the Node.js util module is used to format a string using printf-style placeholders. 
It works similarly to the console.log method, but allows you to specify the string format explicitly.
*/

const util = require('util')

formatedString = util.format('my name is %s, and my age is %d', 'Vijayarangan', 21)

console.log(formatedString)             // my name is Vijayarangan, and my age is 21