/*
The require(id) function is a core function in Node.js that allows you to include and use modules from other parts of your application. 
The id argument is a string that specifies the path to the module that you want to include. 
The require function returns the exports object from the specified module.
*/

const addFunction = require('./module')

console.log(addFunction(10,20))     // 30
