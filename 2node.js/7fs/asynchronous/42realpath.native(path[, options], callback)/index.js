/*
The fs.realpath.native method in Node.js is used to resolve symbolic links and return the absolute path name. It is similar to the fs.realpath method, but it uses the operating system's native realpath function instead of following the symbolic link itself.

path is a string that specifies the file or directory for which to retrieve the absolute path.
options is an optional object that can have the following properties:
encoding: a string that specifies the encoding to use for the returned absolute path. Can be 'utf8' or 'buffer'.
callback is a function that takes two arguments: (err, resolvedPath). err is an error object if an error occurred during the realpath operation. resolvedPath is a string that represents the absolute path name.

*/

