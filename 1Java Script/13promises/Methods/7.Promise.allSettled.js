/*
accepts an iterator as parameter which contains promises and non-promises

returns a Promise array of values and result for all promises in the iterator

If the iterable contains non-promise values, they will be ignored, 
but still counted in the returned promise array value
*/

// for resolved allSettled
a = Promise.resolve('a resolved')
b = 'b resolved'
c = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'c resolved')
})

allSettled = Promise.allSettled([a, b, c])
allSettled.then((x) => console.log(x))

/*
[
  { status: 'fulfilled', value: 'a resolved' },
  { status: 'fulfilled', value: 'b resolved' },
  { status: 'fulfilled', value: 'c resolved' }
]
*/



// for rejected allSettled
a = Promise.reject('a rejected')
b = 'b resolved'
c = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'c rejected')
})

allSettled = Promise.allSettled([a, b, c])
allSettled.then((x) => console.log(x))
allSettled.then((x) => x.forEach((x) => console.log(`status: ${x.status}, value: ${x.value??x.reason}`)))
/*
status: rejected, value: a rejected
status: fulfilled, value: b resolved
status: rejected, value: c rejected
*/



// with empty array
a1 = Promise.allSettled([]) // imidiately fullfilled
console.log(a1) // Promise { [] }



// handling error inside iterable
a = Promise.reject('rejected')
b = Promise.resolve('resolved')

promise = Promise.allSettled([a.catch((x) => x), b.catch((x) => x)])

promise.then((x) => console.log(x))
/*
[
  { status: 'fulfilled', value: 'rejected' },
  { status: 'fulfilled', value: 'resolved' }
]
*/