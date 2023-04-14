/*
error.code is a property of the Error object in JavaScript that can be used to store a code that represents the type of error that occurred. 
The error.code property is not part of the official JavaScript specification, but it is a common convention to use it to provide additional information about an error.
*/

class MyError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

const ERR_NOT_FOUND = "ERR_NOT_FOUND";

try {
    throw new MyError("The requested resource was not found", ERR_NOT_FOUND);
} catch (error) {
    if (error.code === ERR_NOT_FOUND) {
        console.error("An error occurred:", error.message);
    } else {
        console.error("An unexpected error occurred:", error);
    }
}
/*
An error occurred: The requested resource was not found
*/