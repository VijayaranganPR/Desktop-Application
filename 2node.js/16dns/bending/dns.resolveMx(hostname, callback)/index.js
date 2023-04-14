/*
The dns.resolveMx method is used to resolve the MX (mail exchange) records for a given hostname. 
The MX records specify the mail servers that are responsible for handling email for a domain.
*/

const dns = require('dns')

dns.resolveMx('www.youtube.com', (err, address) => {
    if(err) throw err

    console.log(address)
})

/*
Error: queryCaa ENODATA www.google.com
*/