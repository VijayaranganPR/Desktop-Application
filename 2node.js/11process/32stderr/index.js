/*
The process.stderr property in Node.js is a writable stream that represents the standard error output of the Node.js process. 
By default, the standard error output is directed to the terminal or console where the Node.js process is running. 
You can write data to the standard error stream using the process.stderr.write method.
*/

process.stderr.write('This is an error message.\n');
