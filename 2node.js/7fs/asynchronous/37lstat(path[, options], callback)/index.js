/*
fs.lstat is a method in Node.js that retrieves information about a symbolic link (also known as a soft link or symlink). The method takes the following arguments:

path: The file path of the symbolic link you want to retrieve information about.
options (optional): An object that can contain encoding information. If specified, the options.encoding property should be set to a string that specifies the encoding to use when reading the symbolic link's content.
callback: A callback function that will be called once the information about the symbolic link has been retrieved. The callback will receive two arguments:
err: An error object if an error occurred, or null otherwise.
stats: An object that contains information about the symbolic link, such as its size, creation time, and last modification time.

*/

const fs = require('fs')

fs.lstat('file.txt', (err, stats) => {
    if(err) throw err

    console.log(stats)
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
  ino: 6755399441673522,
  size: 0,
  blocks: 0,
  atimeMs: 1675296713004.8542,
  mtimeMs: 1675296713004.8542,
  ctimeMs: 1675296713004.8542,
  birthtimeMs: 1675296713004.8542,
  atime: 2023-02-02T00:11:53.005Z,
  mtime: 2023-02-02T00:11:53.005Z,
  ctime: 2023-02-02T00:11:53.005Z,
  birthtime: 2023-02-02T00:11:53.005Z
}

*/