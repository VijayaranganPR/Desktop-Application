/*
The terminate method in the worker_threads module of Node.js is used to forcibly terminate a worker thread.
*/

const {Worker, isMainThread, parentPort} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename)

    // sending message to worker thread
    worker.postMessage('Message from main thread')


    // getting message from worker thread
    worker.on('message', (message) => {
        console.log(message)
        worker.terminate()})        // to avoid worker thread to run continuously
}
else{
    // sending message to main thread
    parentPort.postMessage('message from worker thread')
    
    
    // getting message from main thread
    parentPort.on('message', (message) => console.log(message))
}
/*
message from worker thread
Message from main thread
*/