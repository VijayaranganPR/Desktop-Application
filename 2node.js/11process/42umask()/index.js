/*
process.umask(mask) sets the Node.js process's file mode creation mask. Child processes inherit the mask from the parent process. Returns the previous mask.
*/

const process =  require('process');

const newmask = 0o022;
const oldmask = process.umask(newmask);
console.log(
  `Changed umask from ${oldmask.toString(8)} to ${newmask.toString(8)}`,
);

/*
Changed umask from 0 to 22
*/
