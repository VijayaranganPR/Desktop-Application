const {isMainThread, Worker} = require('worker_threads')
const fs = require('fs')
// process.setUncaughtExceptionCaptureCallback((err) => console.log(err))
if(isMainThread){
    const worker = new Worker(__filename)
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if(err) throw err
        console.log('from main thread: '+data)
    })
    
    fs.writeFile('text.txt', 'Writen by main thread', (err) => {
        if(err) throw err
        console.log('written successfully by main thread')
    })
} else{
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if(err) throw err
        console.log('from worker thread: '+data)
    })

    fs.writeFile('text.txt', 'Writen by worker thread', (err) => {
        if(err) throw err
        console.log('written successfully by worker thread')
    })
}
