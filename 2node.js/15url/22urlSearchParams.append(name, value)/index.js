/*
The URLSearchParams.append(name, value) method is a part of the URLSearchParams API in JavaScript. 
It adds a new search parameter to the URLSearchParams object, with the specified name and value. 
If a search parameter with the same name already exists, it will append the new value to the existing value(s).
*/

const params = new URLSearchParams();

params.append('key1', 'value1')
params.append('key2', 'value2')
params.append('key3', 'value3')

console.log(params.toString())          // key1=value1&key2=value2&key3=value3
