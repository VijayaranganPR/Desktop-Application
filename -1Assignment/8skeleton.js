const {Worker, isMainThread, parentPort} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename)

    worker.postMessage('Hello from Main Thread')

    worker.on('message', (value) => {
        console.log(value)
        worker.terminate()
    })
    
}else{
    parentPort.on('message', (value) => {
        console.log(value)
    })
    parentPort.postMessage('Hello from Worker Thread')
}
