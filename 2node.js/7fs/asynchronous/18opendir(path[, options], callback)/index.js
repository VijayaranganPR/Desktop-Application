/*
fs.opendir is a method in Node.js that opens a directory.

It takes the following arguments:

path: the path to the directory you want to open
options: an optional object that specifies additional options. Currently, no options are supported.
callback: a function to be called when the directory has been opened. The function takes two arguments: an error object, and the directory descriptor for the opened directory.
The fs.opendir method returns a directory descriptor, which is a small integer that represents the opened directory. You can use the directory descriptor to perform other directory-related file system operations, such as reading the contents of the directory. When you're done with the directory, you should close it using fs.close.


*/

const fs = require('fs')

fs.opendir('Directory',(err,dir) => {
    if(err) throw err
    console.log('Directory opened')
    console.log(dir)
})
/*
Directory opened
Dir {
  [Symbol(kDirHandle)]: DirHandle {},
  [Symbol(kDirBufferedEntries)]: [],
  [Symbol(kDirPath)]: 'Directory',
  [Symbol(kDirClosed)]: false,
  [Symbol(kDirOperationQueue)]: null,
  [Symbol(kDirOptions)]: { bufferSize: 32, encoding: 'utf8' },
  [Symbol(kDirReadPromisified)]: [Function: bound [kDirReadImpl]],
  [Symbol(kDirClosePromisified)]: [Function: bound close]
}
*/