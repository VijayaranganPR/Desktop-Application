/*
process.memoryUsage.rss() is a method in Node.js that returns the total memory usage of the Node.js process in bytes. 
The "rss" stands for "resident set size", which is the amount of memory that is currently resident in RAM (as opposed to swapped out to disk).


All the properties are in bytes.
*/

console.log(process.memoryUsage.rss())
/*
30187520
*/
