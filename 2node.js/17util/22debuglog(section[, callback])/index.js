/*
util.debuglog is a method in the Node.js util module that returns a function that can be used to write debug messages to stderr when the NODE_DEBUG environment variable is set to include the section value.

The section argument is a string that represents a section or category of your code, and is used to enable or disable debug messages. 
The NODE_DEBUG environment variable is a comma-separated list of sections for which debug messages should be printed. 
If the section argument is included in the list, the function returned by util.debuglog will write messages to stderr, otherwise it will not do anything.
*/

const util = require('util')

const debugFunction = util.debug('my-module')

debugFunction('Debug Message')
// it will print Debug Message in the log if NODE_DEBUG=my-module