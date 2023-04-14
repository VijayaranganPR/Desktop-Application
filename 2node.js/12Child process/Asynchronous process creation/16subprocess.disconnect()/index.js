/*
The subprocess.disconnect() method in Node.js is used to disconnect the IPC communication channel 
between a parent and child process created using the child_process.spawn(), child_process.exec(), or child_process.fork() methods. 

After a child process has been disconnected, 
it will continue to run normally but will no longer be able to receive messages from or send messages to its parent process.
*/
const { fork } = require('child_process');

const child = fork('./child.js');
child.on('message', (message) => {
  console.log('time taken = '+ message +' sec');
});

child.send({ n: 45 });

setTimeout(() => {
    child.disconnect()
    console.log(`child process disconnected`);
    process.exit()          // it will continue running so we need to exit
}, 5000)


/* original output
child process disconnected
*/


/* time taken
time taken = 15.24 sec
*/
