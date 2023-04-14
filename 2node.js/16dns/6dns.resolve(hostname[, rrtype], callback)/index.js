/*
The dns.resolve method performs a DNS query for the given hostname and returns an array of records for the specified resource record type (RR type). The method has the following parameters:

hostname: A string representing the hostname to look up.

rrtype (optional): A string representing the resource record type to look up. The default is 'A' (IPv4 addresses).

callback: A function that will be called with the result of the lookup. 
The function will receive two arguments: 
    an error object (if there was a problem with the lookup), and 
    an array of resource records for the specified type.

rrtype	records contains	Result type	Shorthand method
'A'	    IPv4 addresses (default)	<string>	dns.resolve4()
'AAAA'	IPv6 addresses	<string>	dns.resolve6()
'ANY'	any records	<Object>	dns.resolveAny()
'CAA'	CA authorization records	<Object>	dns.resolveCaa()
'CNAME'	canonical name records	<string>	dns.resolveCname()
'MX'	mail exchange records	<Object>	dns.resolveMx()
'NAPTR'	name authority pointer records	<Object>	dns.resolveNaptr()
'NS'	name server records	<string>	dns.resolveNs()
'PTR'	pointer records	<string>	dns.resolvePtr()
'SOA'	start of authority records	<Object>	dns.resolveSoa()
'SRV'	service records	<Object>	dns.resolveSrv()
'TXT'	text records	<string[]>	dns.resolveTxt()
*/

const dns = require('dns')

dns.resolve('www.google.com', 'A', (err, address) => {
    if (err) throw err

    console.log(address)
})
// [ '142.250.205.228' ]
