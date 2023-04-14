/*
The process.resourceUsage() method is a function in the Node.js JavaScript runtime that returns an object containing information about the resource usage of the current process. 
The object contains properties such as user CPU time, system CPU time, memory usage, and peak memory usage.

*/

console.log(process.resourceUsage())

/*
{
  userCPUTime: 0,
  systemCPUTime: 0,
  maxRSS: 29612,
  sharedMemorySize: 0,
  unsharedDataSize: 0,
  unsharedStackSize: 0,
  minorPageFault: 0,
  majorPageFault: 7917,
  swappedOut: 0,
  fsRead: 2,
  fsWrite: 0,
  ipcSent: 0,
  ipcReceived: 0,
  signalsCount: 0,
  voluntaryContextSwitches: 0,
  involuntaryContextSwitches: 0
}
*/