/*
The path.relative method in Node.js takes two file paths as its arguments and returns a string that represents the relative file path from one file path to another.
/ is the root of the current drive;
./ is the current directory;
../ is the parent of the current directory.


*/

const path = require('path')

const from = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.parse(path)\\index.js'
const to = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.relative(from, to)\\index.js'

console.log(path.relative(from, to))
/*
..\..\path.relative(from, to)\index.js
*/