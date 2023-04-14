/*
The domain.exit method in Node.js is used to exit a domain and stop error handling within the domain.

In Node.js, domains provide a way to handle errors in a controlled and isolated environment, 
and the exit method is used to indicate the end of this error handling scope.
*/

const domain = require('domain')

const d = domain.create()

d.on('error', (err) => {
    console.log(`Caught error in domain: ${err}`);
})

function asynchronous(){
    d.enter()

    process.nextTick(() => {
        throw new Error('Error occurred')
    })
    
    d.exit()
}

asynchronous()
/*
Caught error in domain: Error: Error occurred
*/