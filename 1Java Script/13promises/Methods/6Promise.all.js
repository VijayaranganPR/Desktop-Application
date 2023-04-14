/*
accepts an iterator as parameter which contains promises and non-promises

if all promises resolved - retunes a fullfilled promise array of promise values
if any one pormise rejected - retunes the rejected promise reason, and exection stops.

If the iterable contains non-promise values, they will be ignored, 
but still counted in the returned promise array value
*/


// for resolved all
a = Promise.resolve('a resolved')
b = 'b resolved'
c = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'c resolved')
})

allPromise = Promise.all([a, b, c])
allPromise.then((x) => console.log(x))

// [ 'a resolved', 'b resolved', 'c resolved' ]



// for rejected all
a = Promise.reject('a rejected')
b = 'b resolved'
c = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'c resolved')
})

allPromise = Promise.all([a, b, c])
allPromise.then((x) => console.log(x), (x) => console.log(x))
// a rejected



// with empty array
a1 = Promise.all([]) // imidiately fullfilled
console.log(a1) // Promise { [] }



// handling error inside iterable
a = Promise.reject('rejected')
b = Promise.resolve('resolved')

promise = Promise.all([a.catch((x) => x), b.catch((x) => x)])

promise.then((x) => console.log(x)) // [ 'rejected', 'resolved' ]