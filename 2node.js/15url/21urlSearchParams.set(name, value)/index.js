/*
The URLSearchParams.set(name, value) method is a part of the URLSearchParams API in JavaScript. 
It sets the value of a search parameter with the specified name to the specified value. 
If there was no such search parameter, it creates a new one. 
If there was such a search parameter, it overwrites its value.
*/

let params = new URLSearchParams("key1=value1&key2=value2");

params.set('key1', 'newvalue1')
params.set('key2', 'newvalue2')

console.log(params.toString())              // key1=newvalue1&key2=newvalue2