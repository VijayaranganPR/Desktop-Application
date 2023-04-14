// the execution will go on but only remembers the first resolve or rejected message.
// 


// using reject first
console.log(`code starting`);
console.log(`using reject first`);

promiseObject1 = new Promise((resolve, reject) => {
    reject('reject 1 in promiseObject1')
    reject('reject 2 in promiseObject1')
    resolve('resolve 1 in promiseObject1')
    console.log('inside promiseObject1')
    resolve('resolve 2 in promiseObject1')
    resolve('resolve 3 in promiseObject1')
    console.log('inside promiseObject1')
})
console.log(promiseObject1)
promiseObject1.then((x) => console.log(x), (x) => console.log(x))
promiseObject1.catch((x) => console.log(x))
console.log('code ending')

/*
code starting
using reject first
inside promiseObject1
inside promiseObject1
Promise { <rejected> 'reject 1 in promiseObject1' }
code ending
reject 1 in promiseObject1
reject 1 in promiseObject1
*/



console.log(``);
// using resolve first
console.log('code starting')
console.log(`using resolve first`);

promiseObject = new Promise((resolve, reject) => {
    resolve('resolve 1 in promiseObject2')
    resolve('resolve 2 in promiseObject2')
    reject('reject 1 in promiseObject2')
    reject('reject 2 in promiseObject2')
    console.log('inside promiseObject2')
    resolve('resolve 3 in promiseObject2')
    console.log('inside promiseObject2')
})
promiseObject.then((x) => console.log(x), (x) => console.log(x))
promiseObject.catch((x) => console.log(x))
console.log('code ending')

/*
code starting
using resolve first
inside promiseObject2
inside promiseObject2
code ending
resolve 1 in promiseObject2
*/



console.log(``);
// using return only - will always be in pending stage
console.log(`using return only`);

promiseObject3 = new Promise((resolve, reject) => {
    return 'summa'
    resolve('x')
})
console.log(promiseObject3)
promiseObject3.then((x) => console.log(x), (x) => console.log(x))
promiseObject3.catch((x) => console.log(x))


console.log(`last line in code`);

/*
using return only
Promise { <pending> }
last line in code
*/



console.log(``);
//  rejecting long running promise
// if promise doesn't resolve in 1 sec it will be rejected
console.log(`rejecting long running promise`);

promiseObject3 = new Promise((resolve, reject) => {
    kill = setTimeout(() => {
        resolve('resolve')
        clearTimeout(kill2)
    }, 2000)
    kill2 = setTimeout(() => {
        reject('rejected')
        clearTimeout(kill)
    }, 1000)
})
promiseObject3.then((x) => console.log(x), (x) => console.log(x))

console.log(`last line in code`);

/*
rejecting long running promise
last line in code
rejected
*/