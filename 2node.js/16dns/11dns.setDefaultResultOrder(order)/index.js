/*
The dns.setDefaultResultOrder method sets the default result order for resolving domain names. The method takes one argument:

order: a string that specifies the order in which IP addresses should be returned. The allowed values are 'A', 'AAAA', or 'CNAME'.
*/

const dns = require('dns')

dns.setDefaultResultOrder('ipv4first')

dns.setServers(['8.8.8.8', '8.8.4.4']); // to avoid error 


dns.resolveAny('www.google.com', (err, addresses) => {
    if (err) throw err;
  
    console.log(addresses);
  });

/*
[
  { address: '142.250.183.4', ttl: 16, type: 'A' },
  { address: '2404:6800:4009:820::2004', ttl: 16, type: 'AAAA' }
]
*/