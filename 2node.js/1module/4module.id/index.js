/*
The identifier for the module. Typically this is the fully resolved filename.

only returns a single dot (.) to indicate that the current module is the main module of the application and not a required module.
*/
const addFunction = require('./module.js')
console.log(module.id)

/*
.
*/
