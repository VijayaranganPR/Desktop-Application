/*
The path.normalize method in Node.js takes a file path as its argument and returns a string that represents the equivalent normalized file path. 
A normalized file path is a file path that has any redundant components removed, such as . and .. segments.

/ is the root of the current drive;
./ is the current directory;
../ is the parent of the current directory.

*/

const path = require('path')

let filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.normalize(path)\\index.js'

console.log(path.normalize(filePath))
// C:\Users\prvij\Desktop\Java Script\21node.js\path\path.normalize(path)\index.js


filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\..\\path.normalize(path)\\index.js'

// one directory removed
console.log(path.normalize(filePath))
// C:\Users\prvij\Desktop\Java Script\path.normalize(path)\index.js


filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\..\\..\\path.normalize(path)\\index.js'

// two directory removed
console.log(path.normalize(filePath))
// C:\Users\prvij\path.normalize(path)\index.js


filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\.\\.\\path.normalize(path)\\index.js'

// no directory removed
console.log(path.normalize(filePath))
// C:\Users\prvij\Desktop\Java Script\path.normalize(path)\index.js
