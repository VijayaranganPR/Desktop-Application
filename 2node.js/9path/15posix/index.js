/*
The path.posix property in Node.js is an object that contains methods for working with file paths on POSIX (Portable Operating System Interface) systems, such as Linux and macOS. 
The methods in the path.posix object are similar to the methods in the path module, but are optimized for use on POSIX systems.
*/

const path = require('path')

console.log(path.posix)
/*
<ref *2> {
  resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: bound _format],
  parse: [Function: parse],
  sep: '/',
  delimiter: ':',
  win32: <ref *1> {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    sep: '\\',
    delimiter: ';',
    win32: [Circular *1],
    posix: [Circular *2],
    _makeLong: [Function: toNamespacedPath]
  },
  posix: [Circular *2],
  _makeLong: [Function: toNamespacedPath]
}
*/