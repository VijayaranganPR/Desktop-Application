/*
error.stack is a property of the Error object in JavaScript that contains a stack trace of the call stack at the time the error was thrown. 
The error.stack property is part of the official JavaScript specification and is commonly used to provide information about the context in which an error occurred.
*/

try {
    throw new Error("An error occurred");
} catch (error) {
    console.error("An error occurred:", error.message);
    console.error("Stack trace:", error.stack);
}
/*
An error occurred: An error occurred
Stack trace: Error: An error occurred
    at Object.<anonymous> (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\error.stack\index.js:7:11)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
*/
