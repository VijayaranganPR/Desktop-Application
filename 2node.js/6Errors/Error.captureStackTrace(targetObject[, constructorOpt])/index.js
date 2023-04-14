/*
Error.captureStackTrace() is a method in JavaScript that can be used to capture and store the stack trace in an error object. It's available in the global Error object and can be used with instances of the Error object or with any custom error object that is derived from the Error object.

The method takes two parameters:

    targetObject: The object for which the stack trace should be captured. This object must be an instance of an error object (i.e., an instance of Error or a custom error object derived from Error).

    constructorOpt (optional): The constructor for the error object. If specified, the stack trace will only include frames from the stack that are from this constructor and its callers.

Once Error.captureStackTrace() is called, the stack trace for the error object can be accessed using the stack property of the error object.
*/

function divide (a,b){
    if(b == 0){
        const error = new Error("Cannot divide by zero")
        Error.captureStackTrace(error, divide)
        throw error
    }else{
        return a/b
    }
}

try{
    divide(10,0)
}catch(e){
    console.log(e.stack)
}

/*
Error: Cannot divide by zero
    at Object.<anonymous> (C:\Users\prvij\Desktop\Java Script\21node.js\Errors\Error.captureStackTrace(targetObject[, constructorOpt])\index.js:24:5)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
*/
