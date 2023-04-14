/*
fs.fstat is a method in Node.js used to retrieve the status of a file associated with a file descriptor (fd). The method takes the following arguments:

fd: The file descriptor for the file whose status you want to retrieve.
options (optional): An object with options to control how the data is returned. You can pass { bigint: true } to return the file's timestamps as big integers.
callback: A callback function that will be called once the file status has been retrieved. The callback will receive two arguments: an error object if an error occurred, or null otherwise, and an object with information about the file's status.
*/

const fs = require('fs')

fs.open('file.txt', 'r+', (err, fd) => {
    if(err) throw err
    console.log('file opened')

    fs.fstat(fd,(err, stats) => {
        if(err) throw err
        console.log(stats)
    })
})
/*
file opened
Stats {
  dev: 2893569847,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 11258999068797100,
  size: 17,
  blocks: 0,
  atimeMs: 1675294643448.8816,
  mtimeMs: 1675294626194.693,
  ctimeMs: 1675294636252.2776,
  birthtimeMs: 1675294620507.4282,
  atime: 2023-02-01T23:37:23.449Z,
  mtime: 2023-02-01T23:37:06.195Z,
  ctime: 2023-02-01T23:37:16.252Z,
  birthtime: 2023-02-01T23:37:00.507Z
}
*/