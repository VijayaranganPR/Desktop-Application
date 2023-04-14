/*
process.report is a feature of Node.js that allows you to generate and collect performance and diagnostic information about the Node.js process. 
It is mainly used for troubleshooting and performance analysis of Node.js applications. 
The process report feature is experimental and may not be available in all versions of Node.js.

*/
console.log(process.report.filename);
// ""

console.log(process.report.directory);
// ""

// console.log(process.report.getReport());
// generates full report

console.log(process.report.reportOnFatalError);     // false

console.log(process.report.reportOnSignal)          // false

console.log(process.report.reportOnUncaughtException)   // false 

console.log(process.report.signal)      // SIGUSR2

console.log(process.report.writeReport())
/*
Writing Node.js report to file: report.20230125.160525.6076.0.001.json
Node.js report completed
report.20230125.160525.6076.0.001.json
*/

console.log(process.report);
/*
{
  writeReport: [Function: writeReport],
  getReport: [Function: getReport],
  directory: [Getter/Setter],
  filename: [Getter/Setter],
  compact: [Getter/Setter],
  signal: [Getter/Setter],
  reportOnFatalError: [Getter/Setter],
  reportOnSignal: [Getter/Setter],
  reportOnUncaughtException: [Getter/Setter]
}
*/