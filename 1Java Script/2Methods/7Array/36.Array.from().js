/*
The Array.from() static method creates a new, 
shallow-copied Array instance from an iterable or array-like object.

syntax
Array.from(arrayLike, (element, index) => { ... })
*/


// Simple example
console.log('Simple example')
a = Array.from('123', (x) => x + x);
console.log(a)
a = Array.from([1, 2, 3], (x) => x + x);
console.log(a)
/*
Simple example
[ '11', '22', '33' ]
[ 2, 4, 6 ]
*/



