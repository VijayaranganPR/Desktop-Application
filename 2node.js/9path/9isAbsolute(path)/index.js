/*
The path.isAbsolute method in Node.js checks if a file path is an absolute path or not. 
An absolute path is a file path that starts with the root directory and provides a full reference to a file, 
while a relative path provides a reference to a file relative to the current working directory.

The path.isAbsolute method takes a path as its argument and returns a boolean indicating whether the path is absolute or not.
*/

const path = require('path')

let filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.isAbsolute(path)\\index.js'

console.log(path.isAbsolute(filePath))  // true

filePath = './21node.js\\path\\path.isAbsolute(path)\\index.js'

console.log(path.isAbsolute(filePath))  // false

/*
true
false
*/
