/*
The child_process.kill(signal) method in Node.js is used to send a signal to a child process created using the child_process.spawn(), 
child_process.exec(), or child_process.fork() methods. 

The signal parameter is an optional string that specifies the signal to send to the process. The default signal is 'SIGTERM'.
*/


const { fork } = require('child_process');

const child = fork('./child.js');
child.on('message', (message) => {
  console.log('time taken = '+ message +' sec');
});

child.send({ n: 45 });

setTimeout(() => {
    child.kill()
    console.log(`is child process killed? ` + child.killed);
    // process.exit()               // process won't continue running (this is the difference between process.disconnect())
}, 5000)


/* original output
is child process killed? true
*/


/* time taken
time taken = 15.24 sec
*/
