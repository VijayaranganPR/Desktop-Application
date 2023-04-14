/*
The Resolver constructor takes an optional options object that can be used to configure the behavior of the resolver. The options that can be set include:

servers: An array of IP addresses or hostnames of DNS servers to use for resolution. If not provided, the default DNS servers for the system will be used.

rotate: A boolean indicating whether to rotate the list of servers for each query. Defaults to false.

retry: The number of times to retry a query in case of a non-fatal error. Defaults to 2.

timeout: The number of milliseconds to wait for a response from the DNS server before timing out. Defaults to 5000.
*/

const dns = require('dns')

const options = {
    server: ['8.8.8.8', '8.8.4.4'],
    timeout: 3000,
    retry:1
}

const resolver = new dns.Resolver(options)

resolver.resolve4('www.google.com', (err, address) => {
    if(err) throw err

    console.log(address)
})

// [ '142.250.205.228' ]