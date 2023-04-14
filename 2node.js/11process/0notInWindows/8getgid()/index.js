/*
process.getgid() is a method in Node.js that returns the numeric group identity of the process. 
On POSIX systems, this is the group ID of the user running the process. 
On Windows, this value is always undefined.
*/

const process =  require('process');
console.log(process.getgid)
/*
undefined
*/
