/*
process.hasUncaughtExceptionCaptureCallback() is a method in Node.js that returns a Boolean indicating whether or not an uncaught exception capture callback has been set with process.setUncaughtExceptionCaptureCallback().
*/

const process = require('process')

process.setUncaughtExceptionCaptureCallback((err) => {
    console.error("After catch: " +err)
})

if(process.hasUncaughtExceptionCaptureCallback){
    console.log('setUncaughtExceptionCaptureCallback is set')
}


throw new Error('Here is the Error message')
/*
setUncaughtExceptionCaptureCallback is set
After catch: Error: Here is the Error message       
*/
