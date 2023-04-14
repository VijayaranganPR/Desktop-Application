/*
The dns.lookup method performs a DNS lookup for the given hostname and returns the first resolved address. 
The method has the following parameters:

hostname: A string representing the hostname to look up.

options (optional): An object that can be used to specify the family type (IPv4 or IPv6) of the address to return, as well as other options such as the local interface to use for the query.

callback: A function that will be called with the result of the lookup. 
The function will receive two arguments: an error object (if there was a problem with the lookup), and an object containing the address information.
*/

const dns = require('dns')

dns.lookup('www.google.com',(err, address, family) => {
    if(err) throw err

    console.log(address)
    console.log('IPV'+family)
})

/*
2404:6800:4007:82d::2004
IPV6
*/