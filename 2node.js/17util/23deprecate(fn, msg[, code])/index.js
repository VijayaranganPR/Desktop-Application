/*
The util.deprecate method in the Node.js util module is used to mark a given function fn as deprecated, and to provide a message msg explaining why the function is deprecated and what the recommended alternative is. 
The message will be printed to the console each time the deprecated function is called, to inform developers that they should stop using it.
*/

const util = require('util');

function mainFunction(){
    console.log('This is the main function')
}

const deprecateFunction = util.deprecate(mainFunction, 'This function is deprecated')

deprecateFunction()
/*
This is the main function
(node:29092) DeprecationWarning: This function is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)
*/