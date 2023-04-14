/*
The process.hrtime() method returns the current high-resolution real time in the form of an array, 
where the first element is the number of seconds since the system was booted and the second element is the number of nanoseconds since the last second.

The process.hrtime.bigint() method is similar to process.hrtime() but it returns the value as a BigInt which is a new data type added in JavaScript that can represent integers with arbitrary precision.
*/

console.log(process.hrtime.bigint())
/*
320834522225000n
*/
