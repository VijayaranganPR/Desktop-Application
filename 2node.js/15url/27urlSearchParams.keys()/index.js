/*
The URLSearchParams.keys() method is a part of the URLSearchParams API in JavaScript. 
It returns an iterator allowing to go through all keys of the URLSearchParams object.
*/

const params = new URLSearchParams('key1=value1&key2=value2&key1=value3')

console.log(params.keys())              // URLSearchParams Iterator { 'key1', 'key2', 'key1' }
