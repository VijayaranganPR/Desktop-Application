/*
The path.parse method in Node.js takes a file path as its argument and returns an object that represents the components of the file path. 
The returned object has the following properties:

    root: the root directory of the file path, which is either / on POSIX systems or a drive letter on Windows systems.
    dir: the directory name of the file path.
    base: the file name and extension of the file path.
    ext: the file extension of the file path.
    name: the file name of the file path, without the extension.

/ is the root of the current drive;
./ is the current directory;
../ is the parent of the current directory.


*/

const path = require('path')

const filePath = 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.parse(path)\\index.js'

console.log(path.parse(filePath))
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\prvij\\Desktop\\Java Script\\21node.js\\path\\path.parse(path)',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/