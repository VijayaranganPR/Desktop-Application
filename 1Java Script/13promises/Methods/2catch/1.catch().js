// catch() have single function parameter which will be called if the promise have 
// an error or reject is shown

// basic example
// for success .catch() won't be called
p = new Promise((resolve, reject) => {
    resolve('success')
})

p.catch((reason) => {
    console.log(reason)
}) // This is never called



// for failure .catch() will be called
p1 = new Promise((resolve, reject) => {
    reject('Failure')
})

p1.catch((reason) => {
    console.log(reason)
}) // Failure



// catching error
p2 = new Promise((resolve, reject) => {
    throw 'throwing some error'
})

p2.catch((reason) => {
    console.log(reason)
}) // throwing some error



// throwing error after reject or resolve
p3 = new Promise((resolve, reject) => {
    reject('Failure')
    throw 'throwing some error'
})

p3.catch((reason) => {
    console.log(reason)
}) // Failure



p4 = new Promise((resolve, reject) => {
    resolve('Success')
    throw 'throwing some error'
})

p4.catch((reason) => {
    console.log(reason)
}) // This is never called



// Errors thrown inside asynchronous functions will act like uncaught errors
p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error("Uncaught Exception!");
    }, 0)
    console.log('after error')
})

p5.catch((reason) => console.log(reason.message)) // This is never called, error will thrown
/*
after error
Error: Uncaught Exception! error
*/



// using reject inside a function will be caught
p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Caught Exception!");
    }, 1000)
})

p6.catch((reason) => console.log(reason)) // Caught Exception!