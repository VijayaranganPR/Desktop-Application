/*
module.isPreloading is a property of the module object in Node.js that indicates whether the module is being preloaded. 
A module is considered to be preloading if it is being evaluated before it is needed.
This can improve the startup time of an application by allowing Node.js to load required modules in the background.

*/
const addFunction = require('./module')
console.log(module.isPreloading)    // false

/*
false
*/
