/*
The dns.resolve4 method performs a DNS query for the given hostname and returns an array of IPv4 addresses (A records). The method has the following parameters:

hostname: A string representing the hostname to look up.

options (optional): An object with options for the query. Currently, no options are supported.

callback: A function that will be called with the result of the lookup. 
The function will receive two arguments: 
    an error object (if there was a problem with the lookup), and 
    an array of IPv4 addresses for the hostname.


*/

const dns = require('dns')

dns.resolve4('www.google.com', (err, address) => {
    if(err) throw err

    console.log(address)
})
// [ '142.250.205.228' ]