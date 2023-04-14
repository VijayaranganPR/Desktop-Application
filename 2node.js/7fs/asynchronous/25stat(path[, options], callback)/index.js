/*
fs.stat() is a Node.js file system API that retrieves information about a file or directory at the specified path.

It takes two arguments:

path: A string that specifies the path to the file or directory.
callback: A function that is called with two arguments: (err, stats). The stats object contains information about the file or directory, such as its size, creation time, and whether it is a file or directory. If an error occurs, the first argument will contain an error object.
You can also pass an optional options object as the first argument to control how the information is retrieved.


*/

const fs = require('fs')

fs.stat('file.txt', (err,stats) => {
    if(err) throw err
     console.log(stats);
})
/*
Stats {
  dev: 2893569847,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 5629499534833088,
  size: 17,
  blocks: 0,
  atimeMs: 1675301364239.2798,
  mtimeMs: 1675301262315.9934,
  ctimeMs: 1675301271041.9438,
  birthtimeMs: 1675301257383.3342,
  atime: 2023-02-02T01:29:24.239Z,
  mtime: 2023-02-02T01:27:42.316Z,
  ctime: 2023-02-02T01:27:51.042Z,
  birthtime: 2023-02-02T01:27:37.383Z
}
*/