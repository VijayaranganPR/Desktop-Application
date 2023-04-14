/*
The method dns.resolveSrv(hostname, callback) is used to resolve SRV (Service) records for a given domain name.

SRV records are used to specify the location of specific services, such as voice over IP (VoIP) or instant messaging (IM) services, within a domain. The records specify the host and port for a specific service.

The dns.resolveSrv method takes two arguments:

hostname: The hostname for which you want to resolve SRV records.
callback: A callback function that is called once the SRV records have been resolved, or an error occurs. The function takes two arguments: err and records. The err argument is an error object if an error occurs, or null if there is no error. The records argument is an array of objects, each representing a single SRV record. Each object has properties representing the fields of the SRV record, such as name, port, priority, weight, etc.

*/

const dns = require('dns');

dns.resolveSrv('_sip._udp.google.com', (err, records) => {
  if (err) throw err

  console.log(records);
});
