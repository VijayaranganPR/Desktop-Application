/*
The domain.bind method in Node.js is used to bind a callback function to a specific domain, 
so that all subsequent asynchronous events that occur within the domain will be associated with that domain.
*/

const domain = require('domain')

const d = domain.create()


// asynchronous function
function a(){
    process.nextTick(() => {
        throw new Error('oops, Error occured')
    })
}

// binding the function with a group
const domainFunction = d.bind(a)

// catching error
d.on('error', (err) => {
    console.log(`Caught error: ${err}`);
})

// calling the domain function
domainFunction()

/*
Caught error: Error: oops, Error occured
*/
