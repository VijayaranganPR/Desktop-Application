/*
In Node.js, the main thread refers to the initial thread of execution that starts when you run your Node.js program. 
It is responsible for setting up the runtime environment, executing the initial code, and handling the event loop.

Worker threads are additional threads created in Node.js to execute computationally intensive or blocking operations in parallel with the main thread. 
These worker threads run in the background, allowing the main thread to continue processing events without being blocked by slow or blocking operations. 
Worker threads can be used to perform operations such as file I/O, cryptography, or data processing, improving the overall performance and responsiveness of a Node.js application.


**************only main thread can have access to the dom***************
*/

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Main thread code
  const worker = new Worker(__filename);
  worker.on('message', (result) => {
    console.log(`Result from worker: ${result}`);
    worker.terminate()      // to avoid worker thread to run continuously
  });
  worker.postMessage('Start calculation');
} else {
  // Worker thread code
  parentPort.on('message', (message) => {
    console.log(`Message from main thread: ${message}`);
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    parentPort.postMessage(result);
    return
  });
}
