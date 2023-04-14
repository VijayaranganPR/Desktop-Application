/*
The error.reason property is not a standard property of the Error object in JavaScript or Node.js. 
It is a custom property that might be used in some libraries or applications to provide additional information about the reason for an error.

The error.reason property could provide a human-readable explanation of the reason for an error. 
The exact meaning and usage of the error.reason property would depend on the specific library or application in which it is used.
*/
try {
    // some code that could throw an error
    throw new Error("Error with reason");
} catch (error) {
    if (error.reason) {
        console.error(`Error: ${error.message}`);
        console.error(`Reason: ${error.reason}`);
    }
}
