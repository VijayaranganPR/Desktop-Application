/*
process.throwDeprecation is a property in Node.js that can be used to turn on or off throwing an exception when a deprecation warning is encountered.
*/

const process = require('process')

process.throwDeprecation = true;
try {
    // code that triggers a deprecation warning
    const util = require('util');

    const myFunction = util.deprecate(() => {
        console.log('This function is deprecated');
    }, 'myFunction is deprecated and will be removed in future versions');

    myFunction();
} catch (err) {
    console.log(err)
}
/*
        throw warning;
        ^

DeprecationWarning: myFunction is deprecated and will be removed in future versions
*/