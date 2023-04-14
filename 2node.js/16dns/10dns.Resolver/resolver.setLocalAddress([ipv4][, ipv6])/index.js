/*
The resolver.setLocalAddress method sets the IP address of the local interface to use for outgoing queries. 
This is useful when you want to bind to a specific local IP address for a query, 
instead of allowing the operating system to choose an appropriate address.

The method takes two optional arguments:
    ipv4: The IPv4 address of the local interface to use for outgoing IPv4 queries.
    ipv6: The IPv6 address of the local interface to use for outgoing IPv6 queries.
*/

const dns = require('dns')

const resolver = new dns.Resolver()

resolver.setLocalAddress('192.168.1.100')

resolver.resolve('www.google.com', (err, adddress) => {
    if(err) throw err

    console.log(adddress)
})

// [ '142.250.205.228' ]