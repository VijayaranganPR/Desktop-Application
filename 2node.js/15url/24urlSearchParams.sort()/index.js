/*
The URLSearchParams.sort() method is a part of the URLSearchParams API in JavaScript. 
It sorts all the search parameters in the URLSearchParams object lexicographically by name.
*/

let params = new URLSearchParams("key2=value2&key3=value3&key1=value1");

params.sort()

console.log(params.toString())          /// key1=value1&key2=value2&key3=value3