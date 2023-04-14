/*
The socket property of an HTTP response object in Node.js represents the underlying network socket.

Syntax: response.socket

The socket property is an instance of the net.Socket class, which provides a number of methods and properties for working with the underlying network connection.
*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    res.write('Hello, World!')
    console.log(res.socket)
    res.end()
});

server.listen(3000);


// creating request
const client = http.request('http://localhost:3000/', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    })
});
client.end();



// closing server after work
setTimeout(() => {
    server.close()
}, 2000);



/* 
<ref *2> Socket {
  connecting: false,
  _hadError: false,
  _parent: null,
  _host: null,
  _closeAfterHandlingError: false,
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: true,
    ended: false,
    endEmitted: false,
    reading: true,
    constructed: true,
    sync: false,
    needReadable: true,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: false,
    autoDestroy: true,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: 'utf8',
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: false,
    dataEmitted: false,
    decoder: null,
    encoding: null,
    [Symbol(kPaused)]: false
  },
  _events: [Object: null prototype] {
    end: [ [Function: onReadableStreamEnd], [Function: bound socketOnEnd] ],
    timeout: [Function: socketOnTimeout],
    data: [Function: bound socketOnData],
    error: [Function: socketOnError],
    close: [
      [Function: bound socketOnClose],
      [Function: onServerResponseClose]
    ],
    drain: [Function: bound socketOnDrain],
    resume: [Function: onSocketResume],
    pause: [Function: onSocketPause]
  },
  _eventsCount: 8,
  _maxListeners: undefined,
  _writableState: WritableState {
    objectMode: false,
    highWaterMark: 16384,
    finalCalled: false,
    needDrain: false,
    ending: false,
    ended: false,
    finished: false,
    destroyed: false,
    decodeStrings: false,
    defaultEncoding: 'utf8',
    length: 121,
    writing: false,
    corked: 1,
    sync: true,
    bufferProcessing: false,
    onwrite: [Function: bound onwrite],
    writecb: null,
    writelen: 0,
    afterWriteTickInfo: null,
    buffered: [ [Object], [Object], [Object], [Object] ],
    bufferedIndex: 0,
    allBuffers: false,
    allNoop: false,
    pendingcb: 4,
    constructed: true,
    prefinished: false,
    errorEmitted: false,
    emitClose: false,
    autoDestroy: true,
    errored: null,
    closed: false,
    closeEmitted: false,
    [Symbol(kOnFinished)]: []
  },
  allowHalfOpen: true,
  _sockname: null,
  _pendingData: null,
  _pendingEncoding: '',
  server: <ref *1> Server {
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    requestTimeout: 300000,
    headersTimeout: 60000,
    keepAliveTimeout: 5000,
    connectionsCheckingInterval: 30000,
    _events: [Object: null prototype] {
      request: [Function (anonymous)],
      connection: [Function: connectionListener]
    },
    _eventsCount: 2,
    _maxListeners: undefined,
    _connections: 1,
    _handle: TCP {
      reading: false,
      onconnection: [Function: onconnection],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    _usingWorkers: false,
    _workers: [],
    _unref: false,
    allowHalfOpen: true,
    pauseOnConnect: false,
    noDelay: true,
    keepAlive: false,
    keepAliveInitialDelay: 0,
    httpAllowHalfOpen: false,
    timeout: 0,
    maxHeadersCount: null,
    maxRequestsPerSocket: 0,
    _connectionKey: '6::::3000',
    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
    [Symbol(ServerResponse)]: [Function: ServerResponse],
    [Symbol(kCapture)]: false,
    [Symbol(async_id_symbol)]: 3,
    [Symbol(http.server.connections)]: ConnectionsList {},
    [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
      _idleTimeout: 30000,
      _idlePrev: [TimersList],
      _idleNext: [TimersList],
      _idleStart: 46,
      _onTimeout: [Function: bound checkConnections],
      _timerArgs: undefined,
      _repeat: 30000,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 2,
      [Symbol(triggerId)]: 1
    },
    [Symbol(kUniqueHeaders)]: null
  },
  _server: <ref *1> Server {
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    requestTimeout: 300000,
    headersTimeout: 60000,
    keepAliveTimeout: 5000,
    connectionsCheckingInterval: 30000,
    _events: [Object: null prototype] {
      request: [Function (anonymous)],
      connection: [Function: connectionListener]
    },
    _eventsCount: 2,
    _maxListeners: undefined,
    _connections: 1,
    _handle: TCP {
      reading: false,
      onconnection: [Function: onconnection],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    _usingWorkers: false,
    _workers: [],
    _unref: false,
    allowHalfOpen: true,
    pauseOnConnect: false,
    noDelay: true,
    keepAlive: false,
    keepAliveInitialDelay: 0,
    httpAllowHalfOpen: false,
    timeout: 0,
    maxHeadersCount: null,
    maxRequestsPerSocket: 0,
    _connectionKey: '6::::3000',
    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
    [Symbol(ServerResponse)]: [Function: ServerResponse],
    [Symbol(kCapture)]: false,
    [Symbol(async_id_symbol)]: 3,
    [Symbol(http.server.connections)]: ConnectionsList {},
    [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
      _idleTimeout: 30000,
      _idlePrev: [TimersList],
      _idleNext: [TimersList],
      _idleStart: 46,
      _onTimeout: [Function: bound checkConnections],
      _timerArgs: undefined,
      _repeat: 30000,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 2,
      [Symbol(triggerId)]: 1
    },
    [Symbol(kUniqueHeaders)]: null
  },
  parser: HTTPParser {
    '0': null,
    '1': [Function: parserOnHeaders],
    '2': [Function: parserOnHeadersComplete],
    '3': [Function: parserOnBody],
    '4': [Function: parserOnMessageComplete],
    '5': [Function: bound onParserExecute],
    '6': [Function: bound onParserTimeout],
    _headers: [],
    _url: '',
    socket: [Circular *2],
    incoming: IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      socket: [Circular *2],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: false,
      rawHeaders: [Array],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: [Circular *2],
      _consuming: false,
      _dumped: false,
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 4,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    outgoing: null,
    maxHeaderPairs: 2000,
    _consumed: true,
    onIncoming: [Function: bound parserOnIncoming],
    [Symbol(resource_symbol)]: HTTPServerAsyncResource {
      type: 'HTTPINCOMINGMESSAGE',
      socket: [Circular *2]
    }
  },
  on: [Function: socketListenerWrap],
  addListener: [Function: socketListenerWrap],
  prependListener: [Function: socketListenerWrap],
  setEncoding: [Function: socketSetEncoding],
  _paused: false,
  _httpMessage: ServerResponse {
    _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
    _eventsCount: 1,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: true,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: true,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: null,
    _hasBody: true,
    _trailer: '',
    finished: false,
    _headerSent: true,
    _closed: false,
    socket: [Circular *2],
    _header: 'HTTP/1.1 200 OK\r\n' +
      'Date: Tue, 31 Jan 2023 13:21:20 GMT\r\n' +
      'Connection: close\r\n' +
      'Transfer-Encoding: chunked\r\n' +
      '\r\n',
    _keepAliveTimeout: 5000,
    _onPendingData: [Function: bound updateOutgoingData],
    req: IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      socket: [Circular *2],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: false,
      rawHeaders: [Array],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: [Circular *2],
      _consuming: false,
      _dumped: false,
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 4,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    _sent100: false,
    _expect_continue: false,
    _maxRequestsPerSocket: 0,
    statusMessage: 'OK',
    statusCode: 200,
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kEndCalled)]: false,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: null,
    [Symbol(errored)]: null,
    [Symbol(kUniqueHeaders)]: null
  },
  [Symbol(async_id_symbol)]: 13,
  [Symbol(kHandle)]: TCP {
    reading: true,
    onconnection: null,
    _consumed: true,
    [Symbol(owner_symbol)]: [Circular *2]
  },
  [Symbol(lastWriteQueueSize)]: 0,
  [Symbol(timeout)]: null,
  [Symbol(kBuffer)]: null,
  [Symbol(kBufferCb)]: null,
  [Symbol(kBufferGen)]: null,
  [Symbol(kCapture)]: false,
  [Symbol(kSetNoDelay)]: true,
  [Symbol(kSetKeepAlive)]: false,
  [Symbol(kSetKeepAliveInitialDelay)]: 0,
  [Symbol(kBytesRead)]: 0,
  [Symbol(kBytesWritten)]: 0
}
Hello, World!
*/