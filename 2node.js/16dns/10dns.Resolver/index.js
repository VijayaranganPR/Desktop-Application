/*
dns.Resolver is a class in the Node.js standard library that provides an interface for performing DNS resolution, 
which is the process of converting a hostname to an IP address. 

It provides methods to query DNS servers for various record types, 
such as A (IPv4 address), AAAA (IPv6 address), MX (mail exchange), and more. 

The dns.Resolver class can be used to implement custom DNS client applications, 
or to override the system's default DNS resolver behavior for a specific application.
*/

const dns = require('dns')

const resolver = new dns.Resolver()

resolver.resolve4('www.google.com', (err, address) => {
    if(err) throw err

    console.log(address)
})

// [ '142.250.205.228' ]