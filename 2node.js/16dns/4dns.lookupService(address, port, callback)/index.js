/*
The dns.lookupService method performs a reverse DNS lookup for a given IP address and port and returns the hostname and service name for the given address and port. The method has the following parameters:

address: A string representing the IP address to look up.

port: An integer representing the port number to look up.

callback: A function that will be called with the result of the lookup. 
The function will receive three arguments: 
    an error object (if there was a problem with the lookup), 
    a string representing the hostname, and 
    a string representing the service name.
*/

const dns = require('dns')

dns.lookupService('142.250.205.228', 80, (err, hostname, service) => {
    if(err) throw err

    console.log(hostname)
    console.log(service)
})

/*
maa05s28-in-f4.1e100.net
http
*/