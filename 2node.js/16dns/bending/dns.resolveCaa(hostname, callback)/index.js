/*
The dns.resolveCaa method is used to retrieve Certificate Authority Authorization (CAA) records for a specified hostname. 
CAA records are used to specify which certificate authorities are authorized to issue SSL/TLS certificates for a domain.
*/

const dns = require('dns')

dns.resolveCaa('www.google.com', (err, records) => {
    if(err) throw err

    console.log(records)
})


