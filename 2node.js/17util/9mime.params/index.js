/*
Gets the MIMEParams object representing the parameters of the MIME. This property is read-only. See MIMEParams documentation for details.
*/

const {MIMEType}  = require('node:util')

const myMime = new MIMEType('text/javascript;key=value')

console.log(myMime.params)          // MIMEParams {}