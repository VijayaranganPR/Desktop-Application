/*
The URLSearchParams.entries() method is a part of the URLSearchParams API in JavaScript. 
It returns an iterator that yields an array for each search parameter in the URLSearchParams object, 
in the order in which they were added. Each array has two elements: the name of the search parameter, and its value.
*/

const params = new URLSearchParams('key1=value1&key2=value2&key1=value3')

for(let i of params.entries()){
    console.log(i)
}

/*
[ 'key1', 'value1' ]
[ 'key2', 'value2' ]
[ 'key1', 'value3' ]
*/
