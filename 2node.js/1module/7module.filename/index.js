/*
module.filename is a property of the module object in Node.js that returns the file name of the module being executed. 
It is similar to the __filename global variable, 
but module.filename only returns the path relative to the current module, not the absolute path
*/

const addFunction = require('./module')
console.log(module.filename)

/*
C:\Users\prvij\Desktop\Java Script\21node.js\module\module.filename\index.js
*/
