/*
The module object is a global object in Node.js that represents the current module being executed. 
Every file in a Node.js application is considered to be a module, and each module has its own module object with properties and methods that are specific to that module.

One of the most important properties of the module object is exports, 
which is used to export values and functions from the module so that they can be used in other parts of your application.
*/

const addFunction = require('./module')

console.log(addFunction(10,20))     // 30