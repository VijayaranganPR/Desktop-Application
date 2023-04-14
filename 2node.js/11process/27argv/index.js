/*
The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. 
The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. 
The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments.
*/

const process = require('process')
console.log(process.argv);

/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\process\\41process.argv\\index.js'
]
*/