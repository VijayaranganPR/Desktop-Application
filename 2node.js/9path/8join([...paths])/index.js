/*
The path.join method in Node.js concatenates an arbitrary number of file path segments into a single file path. 
It takes any number of string arguments, which represent the file path segments, 
and returns a string that represents the resulting file path.
*/

const path = require('path')

const filePath = ['C:', 'Users', 'prvij', 'Desktop', 'Java Script', '21node.js', 'path', 'path.join([...paths])', 'index.js']


// pass it as string
console.log(path.join(...filePath))


/*
C:\Users\prvij\Desktop\Java Script\21node.js\path\path.join([...paths])\index.js
*/
