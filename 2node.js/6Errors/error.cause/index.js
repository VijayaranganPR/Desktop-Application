/*
error.cause is not a property of the Error object in JavaScript. There is no standard property named cause in the Error object in JavaScript. 
However, some libraries and frameworks may add custom properties to the Error object, including a cause property. 
The meaning and usage of the cause property will depend on the library or framework that added it.

For example, some libraries may add a cause property to the Error object to indicate the underlying cause of an error. 
The value of the cause property may be another error object, which itself may have its own cause property, allowing for a chain of causes to be established.

If you are using a library or framework that adds a cause property to the Error object, 
you should consult the documentation for that library or framework to understand the meaning and usage of the cause property.
*/

class MyError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
    }
}

try {
    throw new MyError("An error occurred", new Error("The cause of the error"));
} catch (error) {
    console.error(error.message);
    console.error(error.cause.message);
}

/*
An error occurred
The cause of the error
*/