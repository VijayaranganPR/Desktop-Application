/*
In Node.js, the process.channel property is a reference to the IPC channel that the Node.js process uses to communicate with its parent process, 
if it was spawned using the child_process module. 

When a Node.js script is started directly from the command line, the process.channel property is null, because there is no parent process to communicate with.

*/

const child_process = require('child_process')

const child = child_process.fork('child.js')

child.send('message from parent')

child.on('message', (message) => {
    console.log(message)
    console.log(child.channel)
})

/*
message from parent
Message from child process
Control {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false,
  [Symbol(kPendingMessages)]: []
}
*/