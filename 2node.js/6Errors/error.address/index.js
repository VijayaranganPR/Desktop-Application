/*
error.address is not a standard property of the Error object in JavaScript. It is not part of the official JavaScript specification and is not commonly used. 
The Error object in JavaScript typically has properties such as message, stack, and name that can be used to provide information about an error.

If you are using a library or framework that uses the error.address property, it is likely that it is used to store information specific to that library or framework. 
In such cases, you should refer to the documentation for that library or framework for more information about the meaning and usage of the error.address property.
*/

class CustomError extends Error {
    constructor(address, message) {
        super(message);
        this.address = address;
    }
}

try {
    // Some code that throws an error
    throw new CustomError("0x1234567890", "Error message");
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Error address: ${error.address}`);
        console.error(`Error message: ${error.message}`);
    }
}
/*
Error address: 0x1234567890
Error message: Error message
*/