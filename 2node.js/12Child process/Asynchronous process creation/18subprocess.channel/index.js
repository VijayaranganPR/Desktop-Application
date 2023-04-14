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
