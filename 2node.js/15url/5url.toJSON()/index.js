/*
The toJSON() method on the URL object returns the serialized URL. 
The value returned is equivalent to that of url.href and url.toString().
*/

// us toJSON()
const url = new URL('https://www.example.com/page?key=value#hash')

console.log(url.toJSON())       // https://www.example.com/page?key=value#hash


// using stringify
const urls = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org'),
  ];

console.log(JSON.stringify(urls))       // ["https://www.example.com/","https://test.example.org/"]