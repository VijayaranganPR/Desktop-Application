/*
The dns.getServers() method returns an array of IP addresses or hostnames of the DNS servers that the system is currently using for name resolution.
*/
const dns = require('dns')

console.log(dns.getServers())
/*
[
  '2401:4900:50:9::280',
  '2401:4900:50:9::9',
  'fe80::1',
  '192.168.1.1'
]
*/
