/*
Unlike querystring module, duplicate keys in the form of array values are not allowed. 
Arrays are stringified using array.toString(), which simply joins all array elements with commas.

*/

const params = new URLSearchParams({
    user: 'abc',
    query: ['first', 'second'],
});


console.log(params.getAll('query'));            // [ 'first,second' ]


console.log(params.toString());                 // 'user=abc&query=first%2Csecond'
