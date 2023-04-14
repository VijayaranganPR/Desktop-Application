/*
The path.toNamespacedPath method in Node.js takes a file path as its argument and returns a file path that is suitable for use with a Windows API that requires a namespaced path.

The path.toNamespacedPath method is only available on Windows systems, and is typically used when working with Windows API functions that require a namespaced path instead of a regular file path.
*/

const path = require('path')

const filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.toNamespacedPath(path)\\index.js'

console.log(path.toNamespacedPath(filePath))
/*
\\?\C:\Users\prvij\Desktop\Java Script\21node.js\path\path.toNamespacedPath(path)\index.js
*/