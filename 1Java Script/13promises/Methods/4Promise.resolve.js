// Promise.resolve(value) is essentially a shorthand for new Promise((resolve) => resolve(value)).

a1 = Promise.resolve('resolved')
a1.then((value) => console.log(value))
// resolved

a2 = Promise.resolve('resolved')
a2.catch((value) => console.log(value))
// This is never called


// using thenable1
thenable1 = {
    then(resolve, reject) {
        resolve('resolved message thenable1');
    }
}

a3 = Promise.resolve(thenable1)
a3.then((value) => console.log(value))
// resolved message thenable1



// using thenable2
thenable2 = {
    then(resolve, reject) {
        reject('rejected message thenable2')
    }
}

a4 = Promise.resolve(thenable2)
a4.then((value) => console.log(value), (reason) => console.log(reason))
// rejected message thenable2




// using thenable3 inside ()
a4 = Promise.resolve({
    then(resolve, reject) {
        reject('rejected message thenable3')
    }
})
a4.then((value) => console.log(value), (reason) => console.log(reason))
// rejected message thenable3



// using thenable4
const thenable = {
    then(onFulfilled, onRejected) {
        onFulfilled({
            // The thenable is fulfilled with another thenable
            then(onFulfilled, onRejected) {
                onRejected('rejected');
            },
        });
    },
};

Promise.resolve(thenable).then((x) => console.log(x), (x) => console.log(x)); // rejected


// using another promise
p = new Promise((resolve, reject) => reject('rejected'))

k = Promise.resolve(p).catch((x) => console.log(x)) // rejected


// using executor in class constructor
class SomeName {
    constructor(executor) {
        executor(
            (value) => console.log('resolved: ', value),
            (reason) => console.log('rejected: ', reason)
        )
    }
}

Promise.resolve.call(SomeName, 'vijay')
// resolved:  vijay