/*
all Promise-like objects implement the Thenable interface. 
A thenable implements the .then() method, 

which is called with two callbacks: 
one for when the promise is fulfilled, 
one for when it's rejected. 

Promises are thenables as well.
*/

const thenable = {
    then(resolve, reject) {
        resolve({
            then(resolve, reject) {
                reject(0)
            }
        })
    }
}
console.log(thenable) // { then: [Function: then] }
promise = Promise.resolve(thenable)
console.log(promise) // Promise { <pending> } bending because of thenable
promise.then((x) => console.log('resolved value is: ' + x), (x) => console.log('rejected value is: ' + x))
/*
rejected value is: 0
*/