/*
worker.stderr refers to the standard error stream of a worker or process. 
In computing, standard error (stderr) is a stream where error messages or diagnostic information are written. 
This stream is separate from the standard output stream (stdout), which is used to display regular program output. 
In many programming languages, you can redirect or capture the stderr stream to perform error handling or logging.
*/
const {Worker,isMainThread} = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename)
    
    worker.stderr.on('data', (data) => {
        console.error(`Worker stderr: ${data}`);
    });
} else {
    console.error('An error occurred in worker');
}