/*
The process.traceDeprecation property indicates whether the --trace-deprecation flag is set on the current Node.js process. See the documentation for the 'warning' event and the emitWarning() method for more information about this flag's behavior.
*/

const process =  require('process');
console.log(`this will run`);
process.exit(1)
console.log(`this won't run`);  
/*
this will run
*/
