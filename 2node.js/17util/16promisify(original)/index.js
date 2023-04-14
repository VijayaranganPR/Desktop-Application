/*
Takes a function following the common error-first callback style, 
i.e. taking an (err, value) => ... callback as the last argument, and returns a version that returns promises.
*/

const util = require('node:util');
const fs = require('node:fs');

let stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  console.log(stats)
}).catch((error) => {
  throw error
});

/*
Stats {
  dev: 2893569847,
  mode: 16822,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 11258999068828096,
  size: 0,
  blocks: 0,
  atimeMs: 1676202116171.579,
  mtimeMs: 1676202039011.8435,
  ctimeMs: 1676202039011.8435,
  birthtimeMs: 1676202029417.7788,
  atime: 2023-02-12T11:41:56.172Z,
  mtime: 2023-02-12T11:40:39.012Z,
  ctime: 2023-02-12T11:40:39.012Z,
  birthtime: 2023-02-12T11:40:29.418Z
}
*/

// Or, equivalently using async functions:


stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}

callStat()          // This directory is owned by 0

