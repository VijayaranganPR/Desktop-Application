/*
In Node.js, the process.connected property is a boolean that indicates whether the process is running in a child process and connected to its parent process via IPC (Inter-Process Communication). 
If the value is true, it means that the process is connected to its parent process and can send and receive messages through the IPC channel. 
If the value is false, it means that the process is not connected to a parent process and cannot use IPC. 

This property is only available in the child_process module in Node.js.

*/
const { fork } = require('child_process');

// Fork a new child process
const child = fork('./child.js');

// Check if the child process is connected to the parent process
if (child.connected) {
  console.log('Child process is connected to the parent process.');
} else {
  console.log('Child process is not connected to the parent process.');
}

// Send a message to the child process
child.send({ message: 'Hello, child process!' });

// Listen for messages from the child process
child.on('message', (message) => {
  console.log(`Received message from child: ${message}`);
});

