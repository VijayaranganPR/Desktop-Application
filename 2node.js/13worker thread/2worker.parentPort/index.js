/*
The worker.parentPort property is a MessagePort object in the Node.js worker_threads module that represents the communication channel between the worker thread and its parent. 
You can use this property to send data and messages between the worker and its parent, and to listen for messages from the parent.
*/

const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')

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