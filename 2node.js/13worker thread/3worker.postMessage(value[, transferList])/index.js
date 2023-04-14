/*
The postMessage method in the worker_threads module of Node.js is used to send a message from a main thread to a worker thread or from one worker thread to another.


*/

const {isMainThread, Worker, parentPort} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename)

    // sending message to worker thread
    worker.postMessage('Message from main thread')

    // getting message from worker thread
    worker.on('message', (message) => {
        console.log(message)
        worker.terminate()
    })


}
else{
    // sending message to main thread
    parentPort.postMessage('Message from worker thread')

    // getting message from main thread
    parentPort.on('message', (message) => console.log(message))
}

/*
Message from worker thread
Message from main thread
*/