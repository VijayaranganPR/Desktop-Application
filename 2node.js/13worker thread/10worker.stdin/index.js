/*
The stdin property in the worker_threads module of Node.js is a writable stream that provides a way to send data to the standard input (stdin) of a worker thread.
*/

const {isMainThread, Worker, parentPort} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename, {stdin: true})

    worker.stdin.write('Message from main thread\n')

    worker.stdout.on('data', (data) => {
        console.log('from worker thread: ' + data.toString())
        worker.terminate()
    })
} else{
    process.stdin.on('readable', () => {
        data = process.stdin.read()
        process.stdout.write(data.toString())       // print in console
    })
}

/*
Message from main thread
from worker thread: Message from main thread
*/