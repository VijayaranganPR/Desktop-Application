/*
The URLSearchParams.delete(name) method is a part of the URLSearchParams API in JavaScript. 
It removes the search parameter with the specified name from the URLSearchParams object.
*/

const params = new URLSearchParams('key1=value1&key2=value2&key1=value3')

params.delete('key1')

console.log(params.toString())      // key2=value2
