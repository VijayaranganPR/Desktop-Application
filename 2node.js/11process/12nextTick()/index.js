/*
In Node.js, the process.nextTick(callback[, ...args]) function is used to schedule a callback function to be executed on the next iteration of the event loop. 
This can be useful for performing non-blocking operations, such as I/O, without delaying the execution of other code.
*/

process.nextTick(() => {
    console.log('this will be executed in next tick')
})
console.log('this will be executed first')
/*
this will be executed first
this will be executed in next tick
*/

Promise.resolve().then(() => console.log(2));
queueMicrotask(() => console.log(3));
process.nextTick(() => console.log(1));
/*
1
2
3
*/