/*
The domain.members property is an array in Node.js that contains all the objects that have been added to a domain using the domain.add(emitter) method.
*/

const domain = require('domain')
const EventEmitter = require('events')

const emitter1 = new EventEmitter()
const emitter2 = new EventEmitter()

const d = domain.create()

d.add(emitter1)
d.add(emitter2)

console.log(d.members)
/*
[
  EventEmitter {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    [Symbol(kCapture)]: false
  },
  EventEmitter {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    [Symbol(kCapture)]: false
  }
]
*/