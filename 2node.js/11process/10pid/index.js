/*
In Node.js, the process.pid property is a read-only property that returns the process ID (PID) of the current Node.js process. 
The process ID is a unique number assigned to the process when it is created by the operating system. 
It can be used to identify and track the process, and can also be used to send signals to the process from the operating system. 
For example, you can use the process ID to terminate the process using the process.kill() method.
*/

console.log(process.pid)
/*
17656
*/
