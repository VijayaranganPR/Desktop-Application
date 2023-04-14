/*
The error.port property is not a standard property of the Error object in JavaScript or Node.js. 
It's a custom property that can be defined by developers to provide additional information about the port related to an error.
*/
class PortNotAvailableError extends Error {
    constructor(message, port) {
        super(message);
        this.port = port;
    }
}

try {
    // some code that could throw an error
    const port = 8080;
    throw new PortNotAvailableError("Port not available", port);
} catch (error) {
    if (error instanceof PortNotAvailableError) {
        console.error(`Error: ${error.message}`);
        console.error(`Port: ${error.port}`);
    }
}
/*
Error: Port not available
Port: 8080
*/