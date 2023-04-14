/*
The URLSearchParams.get(name) method is a part of the URLSearchParams API in JavaScript. 
It returns the first value associated with the given search parameter name. 
If there is no such search parameter, it returns null.
*/

const params = new URLSearchParams('key1=value1&key2=value2&key1=value3')

console.log(params.get('key1'))
console.log(params.get('key2'))
console.log(params.get('key3'))

/*
value1
value2
null
*/