/*
util.debug is a deprecated method in the Node.js util module that was used to write debug messages to stderr when the NODE_DEBUG environment variable is set to include the section value. 
This method has been replaced by util.debuglog, which provides the same functionality.
*/

const util = require('util');

const debug = util.debug('my-module');

debug('Debug message');
