/*
The method dns.resolveNaptr(hostname, callback) is used to resolve NAPTR (Naming Authority Pointer) records for a given hostname.

NAPTR records are a type of DNS record that can be used to determine how a particular service should be accessed, such as the protocol and transport to be used, and the server responsible for handling requests.

The dns.resolveNaptr method takes two arguments:
    hostname: The hostname for which you want to resolve NAPTR records.
    callback: A callback function that is called once the NAPTR records have been resolved, or an error occurs. The function takes two arguments: err and records. The err argument is an error object if an error occurs, or null if there is no error. The records argument is an array of objects, each representing a NAPTR record for the hostname.

*/

const dns = require('dns')

dns.resolveNaptr('aws.amazon.com', (err, addresses) => {
    if(err) throw err

    console.log(addresses)
})
// []