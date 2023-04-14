/*

*/
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  const array = new Float32Array(10);
  worker.postMessage({
    array,
  });
} else {
  parentPort.on('message', (message) => {
    console.log(message.array.toString());
  });
}


// Uint8Array(8) [
//   0, 0, 0, 0,
//   0, 0, 0, 0
// ]
// Float64Array(1) [ 0 ]


/* without markAsUntransferable()

Uint8Array(0) []
Float64Array(0) []
*/