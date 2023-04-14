/*
In Node.js, the process.getgroups() method returns an array of supplementary group IDs that the process is a member of. These are additional groups that the process has been added to, in addition to its primary group (which is returned by process.getgid()).

Also, this method is not available in Windows operating system.
*/

const process = require('process')

const groups = process.getgroups();
console.log(`The supplementary group IDs of the process are: ${groups}`);


/*
Error 
*/
