/*
The Error object in JavaScript is a standard error object used to represent an error that occurs in the program. 
The Error constructor takes two arguments: message and options.

message is a string that describes the error that has occurred. 
This argument is required and provides information about the error for debugging purposes.

options is an optional argument that can contain additional information about the error. 
It can be an object with properties such as name (the name of the error) and stack (the stack trace of the error).
*/

const error = new Error('Something went wrong', {
    code: 'INVALID_INPUT',
    statusCode: 400,
    stack: 'at ...'
});
console.error(error.message); 
console.error(error.code); 
console.error(error.statusCode);
console.error(error.stack); 
/*
Something went wrong
undefined
undefined
Error: Something went wrong
    at Object.<anonymous> (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\new Error(message[, options])\index.js:12:15)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
*/