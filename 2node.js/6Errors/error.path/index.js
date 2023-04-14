/*
The error.path property is not a standard property of the Error object in JavaScript or Node.js. 
It's a custom property that can be defined by developers to provide additional information about the file or path related to an error.
*/

class FileNotFoundError extends Error {
    constructor(message, path) {
        super(message);
        this.path = path;
    }
}

try {
    // some code that could throw an error
    const filePath = "/path/to/file.txt";
    throw new FileNotFoundError("File not found", filePath);
} catch (error) {
    if (error instanceof FileNotFoundError) {
        console.error(`Error: ${error.message}`);
        console.error(`Path: ${error.path}`);
    }
}
/*
Error: File not found
Path: /path/to/file.txt
*/