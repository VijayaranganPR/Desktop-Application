/*
dns.resolveCname is a method in the Node.js dns module that resolves a hostname to its Canonical Name (CNAME) record. 
CNAME records are used to alias one hostname to another.
*/

const dns = require('dns')

dns.resolveCname('www.youtube.com', (err, address) => {
    if(err) throw err

    console.log(address);
})

// [ 'youtube-ui.l.google.com' ]
