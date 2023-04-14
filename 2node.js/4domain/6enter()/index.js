/*
The domain.enter method in Node.js is used to explicitly enter a domain, 
which is useful when you need to manually control the behavior of error handling in your code.
*/

var domain = require('domain');
var myDomain = domain.create();

function myFunction() {
    // error before enter() will be caught by parent process
    myDomain.enter();
    // Your code here
    process.nextTick(function () {
        // Simulating an error
        throw new Error('Error occurred');
    });
    myDomain.exit();
}

myDomain.on('error', function (error) {
    console.error('Error caught in domain: ', error);
});

myFunction();
