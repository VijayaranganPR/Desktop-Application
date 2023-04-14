/*
accepts an iterator as parameter which contains promises and non-promises

the promise that fulfills first will be stored and exection stops

If the iterable contains non-promise values, they will be ignored, 
but still counted in the returned promise array value
*/

// for non promise value -- a resolved first before b
a = new Promise((resolve) => resolve('a resolved'))
b = 'b resolved' // non-promise value
c = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'c resolved')
})

promise = Promise.race([a, b, c])
setTimeout(() => console.log(promise), 2000) // Promise { 'a resolved' }
promise.then((x) => console.log(x), (x) => console.log(x)) // a resolved




// time matters
a = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'a resolved')
})
b = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'c resolved')
})

promise = Promise.race([a, b])
promise.then((x) => console.log(x), (x) => console.log(x))
// a resolved



// return reject
a = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'a resolved')
})
b = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'c rejected')
})

promise = Promise.race([a, b])
promise.then((x) => console.log(x), (x) => console.log(x))
// c rejected



// with empty array = always bending
a1 = Promise.race([]) 
console.log(a1)
/*
Promise { <pending> }
*/



