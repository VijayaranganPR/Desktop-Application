/*
process.setuid(id) is a method in Node.js that can be used to change the user identity of the current process. 
The id parameter is the numerical user ID that the process should change to.


Also, this method is not available in Windows operating system.
*/

const process = require('process')

const newuid = 100;
try {
  process.setuid(newuid);
  console.log(`The user ID of the process has been set to ${newuid}.`);
} catch (err) {
  console.log(`An error occurred while trying to set the user ID: ${err}`);
}

/*
Error 
*/
