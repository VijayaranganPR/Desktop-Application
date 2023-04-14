/*
The resolver.cancel() method cancels any pending queries made with the resolver. 
This method can be useful in scenarios where you need to abort a query that is taking too long or when you no longer need the result of a query.
*/

const dns = require('dns')

const resolver = new dns.Resolver()

resolver.resolve4('www.google.com', (err, address) => {
    if(err) throw err

    console.log(address)
})

// resolve will be cancelled
setTimeout(() => {
    resolver.cancel()
}, 1)


/*
    if(err) throw err
            ^

Error: queryA ECANCELLED www.google.com
    at QueryReqWrap.onresolve [as oncomplete] (node:internal/dns/callback_resolver:47:19) {
  errno: undefined,
  code: 'ECANCELLED',
  syscall: 'queryA',
  hostname: 'www.google.com'
}
*/