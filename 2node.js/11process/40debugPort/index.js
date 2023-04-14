/*
This code checks the value of process.debugPort and logs a message to the console indicating whether the process is running in debug mode and, 
if so, on which port it is listening for debugging connections.
*/
if (process.debugPort !== -1) {
    console.log(`Application is running in debug mode on port ${process.debugPort}`);
} else {
    console.log("Application is not running in debug mode.");
}

/*
Application is running in debug mode on port 9229
*/
