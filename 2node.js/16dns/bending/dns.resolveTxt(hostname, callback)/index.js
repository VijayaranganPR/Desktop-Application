/*
The dns.resolveTxt method resolves the domain name system (DNS) TXT resource records (RRs) for a given hostname. The method takes two arguments:

hostname: the hostname to resolve
callback: the callback function to be called when the lookup is complete. 
The callback function has two arguments: an error object and an array of strings representing the text records returned.

*/
const dns = require('dns')

dns.resolveTxt('www.google.com', (err, addresses) => {
    if(err) throw err

    console.log(addresses)
})