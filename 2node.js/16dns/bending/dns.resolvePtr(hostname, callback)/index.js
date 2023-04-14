/*
The method dns.resolvePtr(hostname, callback) is used to resolve PTR (Pointer) records for a given hostname or IP address.

PTR records provide a reverse lookup mechanism for IP addresses, allowing you to determine the hostname associated with a given IP address.

The dns.resolvePtr method takes two arguments:

hostname: The hostname or IP address for which you want to resolve PTR records.
callback: A callback function that is called once the PTR records have been resolved, or an error occurs. The function takes two arguments: err and records. The err argument is an error object if an error occurs, or null if there is no error. The records argument is an array of strings, each representing a PTR record for the hostname/IP address.

*/

const dns = require('dns')

dns.resolvePtr('142.250.205.228', (err, addresses) => {
    if(err) throw err

    console.log(addresses)
})