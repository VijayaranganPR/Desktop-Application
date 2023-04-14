/*
In Node.js, the process.setgid(id) method sets the group identity of the process to the specified value, where id is the numerical group ID. This method can be used to change the group that the process belongs to, which can affect the permissions that the process has.


Also, this method is not available in Windows operating system.
*/

const process = require('process')

const newgid = 100;
try {
  process.setgid(newgid);
  console.log(`The group ID of the process has been set to ${newgid}.`);
} catch (err) {
  console.log(`An error occurred while trying to set the group ID: ${err}`);
}


/*
Error 
*/
