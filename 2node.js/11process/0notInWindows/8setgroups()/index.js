/*
process.setgroups() is a method in Node.js that sets the supplementary group IDs that the process is a member of. 
This method is only available on POSIX systems. On Windows, this method will throw an error.

It's important to note that this method requires the process to have the CAP_SETGID capability or the effective user ID to be 0.
*/

const groups = [100, 200, 300];
process.setgroups(groups);
console.log("Supplementary Group IDs:", process.getgroups());

/*
throws error
*/
