//  k = Promise.resolve(3).finally(() => Promise.reject(99))
// k.catch((x) => console.log(x))
/* 
If the handler throws an error or returns a rejected promise, 
the promise returned by finally() will be rejected with that value instead. 
Otherwise, the return value of the handler does not affect the state of the original promise.
*/

function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Mail has arrived');
        } else {
            reject(new Error('Failed to arrive'));
        }
    });
}


// new promise returned will be cared if rejected.

checkMail()
    .finally(() => // if this is .then() the resolve will affect the next then
        new Promise((resolve, reject) => {
            console.log('Experiment completed')
            reject('returned from finally');
        }), )
    .then((mail) => {
        console.log(mail);
    })
    .catch((err) => {
        console.error(err);
    })

/*
on all case:
Experiment completed
returned from finally
*/