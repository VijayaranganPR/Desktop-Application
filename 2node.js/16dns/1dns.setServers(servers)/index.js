/*
The dns.setServers method sets the servers used by the dns module for name resolution. 

The method takes one argument:
    servers: an array of IP addresses of DNS servers to use, specified as strings.

*/

const dns = require('dns')

dns.setServers(['8.8.8.8', '8.8.4.4']); // to avoid error 


dns.resolveAny('www.google.com', (err, addresses) => {
    if (err) throw err;

    console.log(addresses);
});

/*
[
  { address: '172.217.27.196', ttl: 300, type: 'A' },
  { address: '2404:6800:4009:800::2004', ttl: 300, type: 'AAAA' }
]
*/