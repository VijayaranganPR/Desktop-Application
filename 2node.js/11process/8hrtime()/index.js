/*
process.hrtime([time]) is a method in Node.js that returns the current high-resolution real time as an array of two integers. 
The first element of the array represents the number of seconds since the system was booted and the second element represents the number of nanoseconds since the last second. 
If a time value is provided as an argument, the method returns the difference between the current time and the provided time value, 
also in the form of an array.


*/

const start = process.hrtime();
// perform some operation
const end = process.hrtime(start);

console.log(end)    // [ 0, 5100 ]

const durationInSeconds = end[0] + end[1] / 1e9;
console.log(`Duration in seconds: ${durationInSeconds}`);

/*
Duration in seconds: 0.0000051
*/
