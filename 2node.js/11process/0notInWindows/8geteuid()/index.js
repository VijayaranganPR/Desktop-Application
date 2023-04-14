/*
In Node.js, the process.geteuid() method returns the effective user identity of the process. The effective user identity is the user that the process is running as, and is used by the operating system to determine the permissions that the process has.

Also, this method is not available in Windows operating system.
*/

const process = require('process')

const euid = process.geteuid();
console.log(`The effective user ID of the process is ${euid}.`);


/*
Error 
*/
