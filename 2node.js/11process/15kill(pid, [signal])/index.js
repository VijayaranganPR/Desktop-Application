/*
process.kill(pid, [signal]) is a method in Node.js that sends a signal to a process with a specified process ID (pid). 
The signal parameter is optional, and if not provided, the default signal is 'SIGTERM'.
*/

const pid = process.pid
process.kill(pid, 'SIGINT')
console.log('hi')       // won't get executed
/*

*/
