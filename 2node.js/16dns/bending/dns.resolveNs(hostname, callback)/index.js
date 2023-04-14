/*
The method dns.resolveNs(hostname, callback) is used to resolve NS (Name Server) records for a given hostname.

NS records indicate the name servers that are authoritative for a particular domain name.

The dns.resolveNs method takes two arguments:

hostname: The hostname for which you want to resolve NS records.
callback: A callback function that is called once the NS records have been resolved, or an error occurs. The function takes two arguments: err and records. The err argument is an error object if an error occurs, or null if there is no error. The records argument is an array of strings, each representing an NS record for the hostname.

*/

const dns = require('dns')

dns.resolveNs('www.google.com', (err, addresses) => {
    if(err) throw err

    console.log(addresses)
})
