/*
error.message is a property of the Error object in JavaScript that contains a human-readable description of the error that occurred. 
The error.message property is part of the official JavaScript specification and is commonly used to provide information about an error.
*/

try {
    throw new Error("An error occurred");
} catch (error) {
    console.error("An error occurred:", error.message);
}
/*
An error occurred: An error occurred
*/