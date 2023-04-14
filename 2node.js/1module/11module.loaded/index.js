/*
The module.loaded property in Node.js is a boolean property that indicates whether a module has finished loading or not. 
A module is considered loaded when it has been evaluated and its exports object has been created.

*/
const addFunction = require('./module')
console.log(module.loaded)    // false

/*
false
*/
