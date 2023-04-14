/*
In Node.js, the process.platform property is a read-only property that returns a string identifying the operating system platform on which the Node.js process is running. 
The possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32' and 'android'. 

For example, on a Windows operating system, process.platform would return 'win32'. 
This can be useful for writing platform-specific code or for determining the current operating system in use.
*/

console.log(process.platform)
/*
win32
*/
