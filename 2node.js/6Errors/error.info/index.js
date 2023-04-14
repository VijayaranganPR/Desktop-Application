/*
The error.info property is not a standard property of the Error object in Node.js. 
It's a custom property that can be defined by developers to provide additional information about an error.
*/

class CustomError extends Error {
    constructor(message, info) {
        super(message);
        this.info = info;
    }
}

try {
    // Some code that throws an error
    throw new CustomError("Error message", {
        additionalInfo: "value"
    });
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Error message: ${error.message}`);
        console.error(`Additional info:`, error.info);
    }
}
/*
Error message: Error message
Additional info: { additionalInfo: 'value' }
*/