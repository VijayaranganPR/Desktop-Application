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


// new promise returned will not be cared if resolved

checkMail()
    .finally(() => // if this is .then() the resolve will affect the next then
        new Promise((resolve, reject) => {
            console.log('Experiment completed')
            resolve('returned from finally');
        }), )
    .then((mail) => {
        console.log(mail);
    })
    .catch((err) => {
        console.error(err.message);
    })

/*
on success:
Experiment completed
Mail has arrived

on failure:
Experiment completed
Failed to arrive
*/