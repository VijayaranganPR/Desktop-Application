/*
Within a worker thread, worker.getEnvironmentData() returns a clone of data passed to the spawning thread's worker.setEnvironmentData(). 
Every new Worker receives its own copy of the environment data automatically.
*/

const {isMainThread, Worker, getEnvironmentData, setEnvironmentData} = require('worker_threads')

if(isMainThread){
    setEnvironmentData('Hello_key', 'World_value')
    const worker = new Worker(__filename)
}else{
    console.log(getEnvironmentData('Hello_key'))
}

/*
World_value
*/