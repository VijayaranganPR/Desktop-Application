/*
This method is almost identical to domain.bind(callback). However, in addition to catching thrown errors, it will also intercept Error objects sent as the first argument to the function.

In this way, the common if (err) return callback(err); pattern can be replaced with a single error handler in a single place.
*/

const domain = require('domain');
const fs = require('fs')
const myDomain = domain.create();

myDomain.intercept(function (error) {
    console.error('Error intercepted: ', error);
    // Perform custom error handling here
});

myDomain.run(() => {
    fs.readFile('notExisting file.txt', 'utf-8', myDomain.intercept((data) => {
        console.log(data)
    }))
})

myDomain.on('error', function (error) {
    console.error('Error caught in domain: ', error);
});