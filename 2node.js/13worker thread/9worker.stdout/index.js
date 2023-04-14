/*
The stdout property in the worker_threads module of Node.js is a writable stream that represents the standard output (stdout) for a worker thread.
*/

const {isMainThread,Worker,threadId,workerData} = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename, {
        workerData: threadId
    });

    worker.stdout.on('data', (data) => {
        console.log(`Worker stdout: ${data}`);
    });

} else {
    console.log(`Worker started with thread ID: ${workerData}`);
    console.log('Hello from the worker!');
}

/*
Worker started with thread ID: 0
Worker stdout: Worker started with thread ID: 0

Hello from the worker!
Worker stdout: Hello from the worker!
*/