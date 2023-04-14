/*
Is true if this code is not running inside of a Worker thread.
*/

const {Worker, isMainThread} = require('worker_threads')

if(isMainThread){
    new Worker(__filename)
}
else{
    console.log('is this a main thread? ' + isMainThread)
}
/*
is this a main thread? false
*/