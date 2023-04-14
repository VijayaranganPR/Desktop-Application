/*
process.setUncaughtExceptionCaptureCallback(fn) is a method in Node.js that can be used to register a callback function that will be invoked when an uncaught exception occurs. 
An uncaught exception is an exception that is not caught and handled by a try-catch block or by a domain error handler.
*/

const process = require('process')

process.setUncaughtExceptionCaptureCallback((err) => {
    console.error("After catch: " +err)
})

throw new Error('Here is the Error message')
/*
After catch: Error: Here is the Error message
*/
