/*
The error.dest property is not a standard property of the Error object in Node.js or JavaScript. 
It is not part of the official Node.js API, and its meaning and usage may vary depending on the context in which it is encountered.

If you are encountering the error.dest property in a Node.js application, I recommend checking the documentation for the module or library that is throwing the error to understand its meaning and usage. 
If the error.dest property is not documented, it may be a custom property defined by the library or module and its usage may be specific to that library or module.
*/
class CustomSystemError extends Error {
    constructor(dest, message) {
        super(message);
        this.dest = dest;
    }
}

try {
    // Some code that throws an error
    throw new CustomSystemError("/path/to/destination", "Error message");
} catch (error) {
    if (error instanceof CustomSystemError) {
        console.error(`Destination: ${error.dest}`);
        console.error(`Error message: ${error.message}`);
    }
}
/*
Destination: /path/to/destination
Error message: Error message
*/