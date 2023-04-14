/*
It's not working in both ide and cmd

process.traceDeprecation is a boolean property in Node.js that when set to true, 
causes the Node.js process to emit a warning when it uses a deprecated feature. 
This allows developers to identify and update any deprecated code in their application.
*/

const process = require('process')

process.traceDeprecation = true;
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
This function is deprecated
(node:13948) DeprecationWarning: myFunction is deprecated and will be removed in future versions  
*/