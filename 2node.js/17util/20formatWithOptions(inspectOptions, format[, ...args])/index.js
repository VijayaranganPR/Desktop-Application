/*
The util.formatWithOptions(inspectOptions, format[, ...args]) is a method from the Node.js util module. 
It works similarly to the util.format() method, but allows you to pass an options object to customize the way the values are formatted when they are printed to the console.

The inspectOptions argument is an object that specifies the options for formatting the values. 
Some of the options include depth, which sets the maximum depth to which objects are printed when using util.inspect(), colors, 
which specifies whether to use ANSI colors when printing to the console, and compact, which determines the compactness of the output.

The format argument is a string that specifies the format of the output. 
You can use placeholders in the format string to represent values, and pass the values as additional arguments to the function.
*/

const util = require('util');

const options = {
    colors: true,
    depth: 2,
    compact: false
};

const data = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};

console.log(util.formatWithOptions(options, '%j', data));

// {"name":"John","age":30,"address":{"street":"123 Main St","city":"Anytown","state":"CA"}}