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

checkMail()
    .finally(() => {
        console.log('Experiment completed');
    })
    .then((mail) => {
        console.log(mail);
    })
    .catch((err) => {
        console.error(err.message);
    });

/*
on Success:
Experiment completed
Mail has arrived

on Failure:
Experiment completed
Failed to arrive
*/