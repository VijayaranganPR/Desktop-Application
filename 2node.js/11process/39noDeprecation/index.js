/*
In Node.js, the process.noDeprecation property is a boolean that, when true, disables the emitting of process warnings for deprecated features and APIs. 
By default, Node.js will emit a process warning when a feature or API that is marked as deprecated is used, 
to alert developers that the feature or API is scheduled for removal in a future version and should be replaced with an alternative.

*/

const process = require('process')

process.noDeprecation = false;
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
(node:19384) DeprecationWarning: myFunction is deprecated and will be removed in future versions
(Use `node --trace-deprecation ...` to show where the warning was created)
*/