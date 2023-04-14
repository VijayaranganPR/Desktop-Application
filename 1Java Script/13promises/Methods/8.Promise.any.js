/*
accepts an iterator as parameter which contains promises and non-promises

if all promises rejected - retuns a AggregateError with reasons
if any one pormise resolved - retunes the resolved promise value, and exection stops.

If the iterable contains non-promise values, they will be ignored, 
but still counted in the returned promise array value
*/

// for resolved any
a = Promise.resolve('a resolved')
b = 'b resolved'
c = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'c resolved')
})

allPromise = Promise.any([a, b, c])
allPromise.then((x) => console.log(x))

// a resolved



// for rejected any
a = Promise.reject('a rejected')
c = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'c resolved')
})

allPromise = Promise.any([a, c])
allPromise.then((x) => console.log(x), (x) => console.log(x))
/*
[AggregateError: All promises were rejected] {
  [errors]: [ 'a rejected', 'c resolved' ]
}
*/



// with empty array
a1 = Promise.any([]) // imidiately fullfilled
a1.then((x) => console.log(x))
/*
[AggregateError: All promises were rejected] { [errors]: [] }
*/



// handling error inside iterable
a = Promise.reject('rejected')
b = Promise.reject('resolved')

promise = Promise.any([a.catch((x) => x), b.catch((x) => x)])

promise.then((x) => console.log(x))
// rejected



// based on time
const pErr = new Promise((resolve, reject) => {
    console.log(0)
    reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
    console.log(2)
    setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfills first
});
/* Logs:
0
1
2
Done quick
*/