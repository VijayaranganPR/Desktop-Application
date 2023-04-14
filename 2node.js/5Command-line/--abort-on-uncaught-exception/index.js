/*
The --abort-on-uncaught-exception command line option for Node.js is used to terminate the process when an uncaught exception occurs. 
When this option is used, Node.js will not allow any further execution after an uncaught exception has been thrown, 
which can be useful for debugging purposes. 

This option is not enabled by default, and to use it, you need to pass it as a command line argument when starting your Node.js application. 
*/

const process = require('process')
console.log('here is some first text')

process.emitWarning("This is a warning message", {
    name: "MyWarning",
    code: "MY_WARNING",
    detail: "This is additional information about the warning"
});

console.log('This text won\'t run')

/*
Uncaught Error: Error message from file

FROM
Object.<anonymous> (C:\Users\prvij\Desktop\Java Script\21node.js\Command-line\--abort-on-uncaught-exception\index.js:13:1)Module._compile (node:internal/modules/cjs/loader:1218:14)Module._extensions..js (node:internal/modules/cjs/loader:1272:10)Module.load (node:internal/modules/cjs/loader:1081:32)Module._load (node:internal/modules/cjs/loader:922:12)Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)node:internal/main/run_main_module:23:47
*/