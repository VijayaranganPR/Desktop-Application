/*
process.emitWarning(warning[, options]) is a method in Node.js that allows you to emit a warning message from within your script. The method takes two arguments:

    warning: This is the message you want to emit as a warning. It can be a string or an Error object.

    options: This is an optional argument that can be used to configure the warning message. It's an object that can have the following properties:

        name: The name of the warning. By default, it's "Warning".
        code: A string that identifies the warning. This can be useful for programmatic handling of warnings.
        detail: Additional details about the warning.
        stack: A stack trace for the warning.
*/

process.emitWarning("This is a warning message", {
    name: "MyWarning",
    code: "MY_WARNING",
    detail: "This is additional information about the warning"
});

/*
(node:5768) [MY_WARNING] Warning: This is a warning message
This is additional information about the warning
(Use `node --trace-warnings ...` to show where the warning was created)
*/

process.on('warning', (warning) => {
    console.warn(warning.name); // MyWarning
    console.warn(warning.message); // This is a warning message
    console.warn(warning.stack);
    /*
        at Object.<anonymous> (C:\Users\prvij\Desktop\Java Script\21node.js\process\index.js:14:9)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47 
    */
});