/*
The path.resolve method in Node.js takes one or more file paths as its arguments and returns an absolute file path that is the resolved file path from the provided paths. 
The path.resolve method works by starting from the first file path provided and resolving each subsequent path relative to the previous one, until a full absolute file path is constructed.

/ is the root of the current drive;
./ is the current directory;
../ is the parent of the current directory.

*/

const path = require('path')

console.log(path.resolve('/foo/bar', './baz'))
// C:\foo\bar\baz

console.log(path.resolve('/foo/bar', './baz', '../qux/quux')); 
// C:\foo\bar\qux\quux

