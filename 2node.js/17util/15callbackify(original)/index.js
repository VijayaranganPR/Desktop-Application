/*
util.callbackify is a method in Node.js that takes a function that returns a Promise and returns a new function that takes a callback and returns the result using the callback. 
It's used to convert a Promise-based function to a callback-based one.

The util.callbackify method is part of the Node.js util module, which provides utility functions for dealing with objects. 
*/

function returnPromiseFunction(a,b){
    return new Promise((resolve, reject) => {
        if(a === b){
            resolve(a+b)
        }else{
            reject(a-b)
        }
    })
}

const util = require('util')

const myCallbackFunction = util.callbackify(returnPromiseFunction)

myCallbackFunction(2,2, (err, result) => {
    if(err) throw err

    console.log(result)                 // 4
})
