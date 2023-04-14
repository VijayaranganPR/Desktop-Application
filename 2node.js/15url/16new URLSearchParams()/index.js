/*
new URLSearchParams() is a constructor for the URLSearchParams object in JavaScript, which represents the search parameters of a URL.

The URLSearchParams object provides an easy way to manage the search parameters (also known as query parameters) of a URL. 
The search parameters are the part of the URL that comes after the question mark ?, and are used to specify additional information to be sent to the server.
*/

const params = new URLSearchParams('key1=value1&key2=value2')

console.log(params.has('key1'))             // true

console.log(params.get('key1'))             // value1

params.set('key1', 'newvalue')
console.log(params.toString())              // key1=newvalue&key2=value2

params.delete('key1')
console.log(params.toString())              // key2=value2