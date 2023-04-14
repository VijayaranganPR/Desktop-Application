/*
The dns.resolveAny method performs a DNS query for the given hostname and returns all records for the host. The method has the following parameters:

hostname: A string representing the hostname to look up.

callback: A function that will be called with the result of the lookup. 

The function will receive two arguments: 
    an error object (if there was a problem with the lookup), and 
    an array of records for the hostname.


*/

const dns = require('dns')

dns.setServers(['8.8.8.8', '8.8.4.4']); // to avoid error 

dns.resolveAny('www.google.com', (err, records) => {
    if(err) throw err

    console.log(records)
})
/*
[
  { address: '142.250.183.164', ttl: 172, type: 'A' },
  { address: '2404:6800:4009:825::2004', ttl: 172, type: 'AAAA' }
]
*/