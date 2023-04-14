/*
In Node.js, the process.seteuid(id) method sets the effective user identity of the process to the specified value, where id is the numerical user ID. This method can be used to change the effective user that the process runs as, which can affect the permissions that the process has.


Also, this method is not available in Windows operating system.
*/

const process = require('process')

const neweuid = 100;
try {
  process.seteuid(neweuid);
  console.log(`The effective user ID of the process has been set to ${neweuid}.`);
} catch (err) {
  console.log(`An error occurred while trying to set the effective user ID: ${err}`);
}


/*
Error 
*/
