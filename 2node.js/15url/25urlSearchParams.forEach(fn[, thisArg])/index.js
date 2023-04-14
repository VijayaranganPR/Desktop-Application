/*
The URLSearchParams.forEach(fn[, thisArg]) method is a part of the URLSearchParams API in JavaScript. 
It calls the specified function fn once for each search parameter in the URLSearchParams object, 
in the order in which they were added. The fn function is passed three arguments: 
the value of the current search parameter, 
its name, and 
the URLSearchParams object itself.
*/

const params = new URLSearchParams('key1=value1&key2=value2&key1=value3')

params.forEach((value, name) => console.log(name,' : ', value) )

/*
key1  :  value1
key2  :  value2
key1  :  value3
*/