/*
The Array.of() method creates a new Array instance from a variable number of arguments, 
regardless of number or type of the arguments.
*/

// Simple example
console.log('Simple example')

a = Array.of(7); // [7]
console.log(a)
a = Array(7); // array of 7 empty slots
console.log(a)
a = Array.of(1, 2, 3); // [1, 2, 3]
console.log(a)
a = Array(1, 2, 3); // [1, 2, 3]
console.log(a)

/*
Simple example
[ 7 ]
[ <7 empty items> ]
[ 1, 2, 3 ]
[ 1, 2, 3 ]
*/



console.log()
// on sparse array
console.log('on sparse array')

a = Array.of(1,undefined,undefined,3,4)
console.log(a)
/*
on sparse array
[ 1, undefined, undefined, 3, 4 ]
*/

