/*
options Object
enableBuiltInResolver boolean (optional) - Whether the built-in host resolver is used in preference to getaddrinfo. When enabled, the built-in resolver will attempt to use the system's DNS settings to do DNS lookups itself. Enabled by default on macOS, disabled by default on Windows and Linux.
secureDnsMode string (optional) - Can be "off", "automatic" or "secure". Configures the DNS-over-HTTP mode. When "off", no DoH lookups will be performed. When "automatic", DoH lookups will be performed first if DoH is available, and insecure DNS lookups will be performed as a fallback. When "secure", only DoH lookups will be performed. Defaults to "automatic".
secureDnsServers string[] (optional) - A list of DNS-over-HTTP server templates. See RFC8484 § 3 for details on the template format. Most servers support the POST method; the template for such servers is simply a URI. Note that for some DNS providers, the resolver will automatically upgrade to DoH unless DoH is explicitly disabled, even if there are no DoH servers provided in this list.
enableAdditionalDnsQueryTypes boolean (optional) - Controls whether additional DNS query types, e.g. HTTPS (DNS type 65) will be allowed besides the traditional A and AAAA queries when a request is being made via insecure DNS. Has no effect on Secure DNS which always allows additional types. Defaults to true.
Configures host resolution (DNS and DNS-over-HTTPS). By default, the following resolvers will be used, in order:

DNS-over-HTTPS, if the DNS provider supports it, then
the built-in resolver (enabled on macOS only by default), then
the system's resolver (e.g. getaddrinfo).
This can be configured to either restrict usage of non-encrypted DNS (secureDnsMode: "secure"), or disable DNS-over-HTTPS (secureDnsMode: "off"). It is also possible to enable or disable the built-in resolver.

To disable insecure DNS, you can specify a secureDnsMode of "secure". If you do so, you should make sure to provide a list of DNS-over-HTTPS servers to use, in case the user's DNS configuration does not include a provider that supports DoH.
*/
app.configureHostResolver({
    secureDnsMode: 'secure',
    secureDnsServers: [
      'https://cloudflare-dns.com/dns-query'
    ]
  })