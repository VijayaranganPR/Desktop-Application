/*
The URLSearchParams.getAll(name) method is a part of the URLSearchParams API in JavaScript. 
It returns an array of all values associated with the given search parameter name. 
If there is no such search parameter, it returns an empty array.
*/

const params = new URLSearchParams('key1=value1&key2=value2&key1=value3')

console.log(params.getAll('key1'))
console.log(params.getAll('key2'))
console.log(params.getAll('key3'))

/*
[ 'value1', 'value3' ]
[ 'value2' ]
[]
*/