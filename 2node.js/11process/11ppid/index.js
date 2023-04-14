/*
In Node.js, the process.ppid property is a read-only property that returns the process ID (PID) of the parent process of the current Node.js process. 
This can be useful for identifying the parent process that launched the current Node.js process. 
The parent process ID is the process ID of the process that created the current process using the child_process module or by spawning a new process using the spawn() or exec() methods.
*/

console.log(process.ppid)
/*
12544
*/
