// for resolve
const p1 = Promise.resolve('resolved')
resolved = Promise.resolve(p1)              
console.log(p1)                             // Promise { 'resolved' }
console.log(resolved)                       // Promise { 'resolved' }
console.log(p1 === resolved)                // true

// for reject
const p2 = Promise.reject('rejected')
rejected = Promise.reject(p2)
console.log(p2)                             // Promise { <rejected> 'rejected' }
console.log(rejected)                       // Promise { <rejected> Promise { <rejected> 'rejected' } }
console.log(p2 === rejected)                // false

p2.catch((x) => console.log(x))             // rejected