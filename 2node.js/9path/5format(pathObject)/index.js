/*
The path.format method in Node.js takes an object that represents a file path and returns a string that represents the equivalent file path. 
The object should contain the following properties:

    dir: The directory name of the file path.
    root: The root directory of the file path.
    base: The base name of the file path, including the file name and extension.
    name: The file name without the extension.
    ext: The file extension.

*/

const path = require('path')

const filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.format(pathObject)\\index.js'

const filePathObject = path.parse(filePath)
console.log(filePathObject)
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.format(pathObject)',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/

console.log(path.format(filePathObject))
/*
C:\Users\prvij\Desktop\Java Script\21node.js\path\path.format(pathObject)\index.js
*/
