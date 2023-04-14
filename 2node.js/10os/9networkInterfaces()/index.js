const os = require('os')
console.log(os.networkInterfaces())  
// Returns an object containing network interfaces that have been assigned a network address.



/*
{
  'Wi-Fi': [
    {
      address: '2401:4900:1cc9:e245:66f0:863b:10cc:9b30',
      netmask: 'ffff:ffff:ffff:ffff::',      
      family: 'IPv6',
      mac: 'e0:d4:e8:5d:80:b3',
      internal: false,
      cidr: '2401:4900:1cc9:e245:66f0:863b:10cc:9b30/64',
      scopeid: 0
    },
    {
      address: '2401:4900:1cc9:e245:e91e:5723:708f:cf5e',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: 'e0:d4:e8:5d:80:b3',
      internal: false,
      cidr: '2401:4900:1cc9:e245:e91e:5723:708f:cf5e/128',
      scopeid: 0
    },
    {
      address: 'fe80::7681:fc59:fdb3:e90',   
      netmask: 'ffff:ffff:ffff:ffff::',      
      family: 'IPv6',
      mac: 'e0:d4:e8:5d:80:b3',
      internal: false,
      cidr: 'fe80::7681:fc59:fdb3:e90/64',   
      scopeid: 8
    },
    {
      address: '192.168.1.2',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'e0:d4:e8:5d:80:b3',
      internal: false,
      cidr: '192.168.1.2/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
*/
