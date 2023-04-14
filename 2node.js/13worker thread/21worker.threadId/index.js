/*
The worker.threadId property in Node.js returns a unique identifier for the worker thread. It is a read-only property and is only available within the worker thread.

This property is part of the worker_threads module, which provides a way to run multiple independent JavaScript threads (worker threads) within a single Node.js process. 
The worker.threadId property can be used to distinguish between different worker threads within the same process.
*/

const {threadId, Worker, isMainThread } = require('worker_threads')

if(isMainThread){
    new Worker(__filename)
    console.log('Main thread id is: '+threadId)
}
else{
    console.log('Worker thread id is: '+threadId)
}

/*
Main thread id is: 0
Worker thread id is: 1
*/
