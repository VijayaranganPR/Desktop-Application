/*
The worker.setEnvironmentData method in Node.js is used to set environment-specific data for a worker process. It takes two arguments:

key (required): A string representing the key for the environment data.
value (optional): The value to be associated with the key. If value is not provided, the key-value pair is deleted from the environment data.


This method is used in the context of the worker_threads module, which provides a way to run multiple independent JavaScript threads (worker threads) within a single Node.js process. 
The worker.setEnvironmentData method allows you to pass data between the main thread and worker threads.
*/

const {isMainThread, setEnvironmentData, getEnvironmentData, Worker} = require('worker_threads')

if(isMainThread){
    setEnvironmentData('Hello,key', 'World! value')
    new Worker(__filename)
}
else{
    console.log(getEnvironmentData('Hello,key'))
}
/*
World! value
*/