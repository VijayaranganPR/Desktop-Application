// Promise.reject() is essentially a shorthand for new Promise((resolve, reject) => reject(reason))


p = Promise.reject(new Error('fail'))

p.then((value) => console.log(value), (reason) => console.log(reason.message))
// fail


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

Promise.reject(thenable).then((x) => console.log(x), (x) => console.log(x)); // { then: [Function: then] }



// using executor in class constructor
class SomeName {
    constructor(executor) {
        executor(
            (value) => console.log('resolved: ', value),
            (reason) => console.log('rejected: ', reason)
        )
    }
}

Promise.reject.call(SomeName, 'vijay')
// rejected:  vijay