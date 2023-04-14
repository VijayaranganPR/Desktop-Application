/*
The module.path property in Node.js is a deprecated alias for module.filename. 
It is not recommended to use this property, as it may be removed in future versions of Node.js. 
Instead, you should use module.filename to access the file path of the current module. 
The module.filename property returns a string representing the absolute file path to the module being executed.
*/
const addFunction = require('./module')
console.log(module.path)

/*
C:\Users\prvij\Desktop\Java Script\21node.js\module\module.path
*/
