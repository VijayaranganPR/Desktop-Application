/*
The URLSearchParams.has(name) method is a part of the URLSearchParams API in JavaScript. 
It returns a Boolean indicating whether there is a search parameter with the specified name in the URLSearchParams object.
*/

const param = new URLSearchParams("key1=value1&key2=value2&key1=value3")

console.log(param.has('key1'))          // true
console.log(param.has('key2'))          // true
console.log(param.has('key3'))          // false