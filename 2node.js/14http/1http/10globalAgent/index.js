/*
The http.globalAgent in Node.js is an instance of the http.Agent class that is used as the default agent for making HTTP requests. 
The http.Agent class manages a pool of sockets for maintaining persistent connections to remote servers. 
The http.globalAgent instance is shared by all requests that use the default http.ClientRequest class and is automatically created when the first HTTP request is made. 
It can be used to configure global options for HTTP requests such as the maximum number of sockets to maintain per origin.
*/

const http = require('http')

const server = http.createServer((req,res) => {
    
})
server.listen(3000, () => {
    console.log(http.globalAgent)
})

/*
Agent {
  _events: [Object: null prototype] {
    free: [Function (anonymous)],
    newListener: [Function: maybeEnableKeylog]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  defaultPort: 80,
  protocol: 'http:',
  options: [Object: null prototype] { noDelay: true, path: null },
  requests: [Object: null prototype] {},
  sockets: [Object: null prototype] {},
  freeSockets: [Object: null prototype] {},
  keepAliveMsecs: 1000,
  keepAlive: false,
  maxSockets: Infinity,
  maxFreeSockets: 256,
  scheduling: 'lifo',
  maxTotalSockets: Infinity,
  totalSocketCount: 0,
  [Symbol(kCapture)]: false
}
*/