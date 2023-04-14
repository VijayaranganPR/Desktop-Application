/*
The dns.reverse method performs a reverse DNS lookup, resolving the hostname of the given IP address. The method takes two arguments:

ip: the IP address to resolve.
callback: the callback function to be called when the lookup is complete. The callback function has two arguments: an error object and a string representing the hostname.

*/

const dns = require('dns')

dns.reverse('2404:6800:4007:82d::2004', (err, hostnames) => {
    if(err) throw err

    console.log(hostnames)
})

// [ 'maa05s28-in-x04.1e100.net' ]