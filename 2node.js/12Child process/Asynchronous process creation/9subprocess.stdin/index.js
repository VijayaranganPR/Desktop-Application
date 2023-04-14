/*
The stdin property in Node.js is a property of the child process object returned by the child_process.spawn() method. 
The stdin property is a writable stream that represents the standard input stream of the child process.
*/

const spawn = require('child_process').spawn;
const child = spawn('node', ['child.js']);

child.stdin.write('Hello world\n');
child.stdin.end()

child.stdout.on('data', (data) => {
  console.log(`Received data from child: ${data}`);
});

/*
Received data from child: Message from child
Received data from child: Received message: Hello world
*/
