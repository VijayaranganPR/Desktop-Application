/*
The method dns.resolveSoa(hostname, callback) is used to resolve SOA (Start of Authority) records for a given domain name.

SOA records specify the authoritative information about a DNS zone, including the primary name server, the email address of the domain administrator, the domain serial number, and various time intervals relating to refreshes and retries.

The dns.resolveSoa method takes two arguments:

    hostname: The hostname for which you want to resolve SOA records.
    callback: A callback function that is called once the SOA records have been resolved, or an error occurs. The function takes two arguments: err and records. The err argument is an error object if an error occurs, or null if there is no error. The records argument is an object with properties representing the different fields of the SOA record, such as nsname, hostmaster, serial, etc.

*/

const dns = require('dns')

dns.resolveSoa('www.google.com', (err, address) => {
    if(err) throw err   

    console.log(address)
})