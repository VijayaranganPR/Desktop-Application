/*
The worker.workerData property in Node.js provides access to the data that was passed to the worker thread when it was created.

This property is part of the worker_threads module, which provides a way to run multiple independent JavaScript threads (worker threads) within a single Node.js process. 
The worker.workerData property can be used to pass data from the main thread to a worker thread, allowing the worker thread to perform its tasks based on the data it has received.
*/

const {isMainThread, Worker, workerData} = require('worker_threads')

if(isMainThread){
    const obj = {a:1, b:2, c:3}
    const worker = new Worker(__filename, {workerData: obj})
    console.log('worker thread value in main thread ')
    console.log(workerData)         // null
}
else{
    console.log('worker thread value in worker thread ')
    console.log(workerData);         // { a: 1, b: 2, c: 3 }
}
