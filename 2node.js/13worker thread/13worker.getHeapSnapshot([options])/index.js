/*
The getHeapSnapshot method in JavaScript is used to retrieve a heap snapshot of a Worker object in the worker_threads module.

A heap snapshot is a representation of the memory heap of a JavaScript process at a specific point in time. 
It contains information about the memory usage of the process, including the objects that are currently in memory and their properties.

The getHeapSnapshot method allows you to retrieve this information from a Worker object, 
which provides a way to run JavaScript code in a separate thread from the main process. 

This can be useful for performance analysis and debugging, as you can use the heap snapshot to understand the memory usage of the worker thread and identify potential issues.
*/

const {isMainThread, Worker} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename)

    setTimeout(() => {          // sending back to the callback queue so the worker thread will run
        worker.getHeapSnapshot()
        .then(snapshot => console.log(snapshot))
    }, 1000)

}
else{
    let sum = 0;
    for(let i = 1; i<1e10; i++){
        sum +=i
    }
}

/*
<ref *1> HeapSnapshotStream {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    constructed: true,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: 'utf8',
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: false,
    dataEmitted: false,
    decoder: null,
    encoding: null,
    [Symbol(kPaused)]: null
  },
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false,
  [Symbol(kHandle)]: HeapSnapshotStream { [Symbol(owner_symbol)]: [Circular *1] }
}
*/