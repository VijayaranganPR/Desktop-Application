/*
process.cpuUsage([previousValue]) is a method of the process object in Node.js that returns an object containing information about the CPU usage of the current process. 
The object has two properties: user and system, which indicate the amount of CPU time spent in user mode and system mode, respectively, in microseconds.

The previousValue parameter is an optional argument that should be the value returned by a previous call to process.cpuUsage(). 
If provided, the method will return an object with the properties user and system representing the difference in CPU usage since the previous call.

*/
const startUsage = process.cpuUsage();

// Perform some task that takes a significant amount of CPU time
for (let i = 0; i < 100000000; i++) {
  Math.pow(i, 2);
}

const endUsage = process.cpuUsage(startUsage);

console.log(`CPU usage: ${endUsage.user / 1000} ms (user) ${endUsage.system / 1000} ms (system)`);

/*
PU usage: 62 ms (user) 0 ms (system)
*/