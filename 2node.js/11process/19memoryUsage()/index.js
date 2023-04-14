/*
In Node.js, the process.memoryUsage() method is used to return an object that describes the memory usage of the current Node.js process. 

The object returned contains the following properties:

rss: Resident Set Size. It's the amount of memory that is currently held in RAM. It includes all of the process's code, data, and stack.
heapTotal: It's the total amount of memory that has been allocated for the heap.
heapUsed: It's the total amount of memory that has been used out of the total amount allocated for the heap.
external: It's the memory used by C++ objects bound to JavaScript objects managed by V8.

All the properties are in bytes.
*/

console.log(process.memoryUsage())
/*
{
  rss: 30273536,
  heapTotal: 6414336,
  heapUsed: 5673624,
  external: 421057,
  arrayBuffers: 17378
}
*/
