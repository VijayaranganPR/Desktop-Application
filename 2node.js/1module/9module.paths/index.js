/*
The module.paths property in Node.js is an array of strings representing the search paths for node modules. 
These paths are used to resolve the location of modules when they are imported in a Node.js application. 
The paths in the array are searched in order when attempting to load a module, and the first match found is used. 
By default, Node.js includes several directories in the module.paths array, including the current working directory and the global node_modules directory. 
Developers can modify the module.paths array to include additional search paths if desired.
*/

const addFunction = require('./module')
console.log(module.paths)

/*
[
  'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\module.paths\\node_modules',
  'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\module\\node_modules',
  'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\node_modules',
  'C:\\Users\\prvij\\Desktop\\Java Script\\node_modules',
  'C:\\Users\\prvij\\Desktop\\node_modules',
  'C:\\Users\\prvij\\node_modules',
  'C:\\Users\\node_modules',
  'C:\\node_modules'
]*/
