/*
The toString() method on the MIMEType object returns the serialized MIME.

Because of the need for standard compliance, this method does not allow users to customize the serialization process of the MIME.
*/

const {MIMEType} = require('util')

const myMEME = new MIMEType('image/png')

console.log(myMEME.toString())      // image/png
