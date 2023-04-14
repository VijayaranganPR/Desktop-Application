/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. 
The original array will not be modified.

The slice() method preserves empty slots. 
If the sliced portion is sparse, the returned array is sparse as well.

The slice() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.
*/

//simple example
console.log('simple example')
a = [1,2,3,4,5]
console.log(a.slice(1,-2))
/*
simple example
[ 2, 3 ]
*/



console.log()
// without passing arguments
console.log('without passing arguments')
a = [1,2,3,4,5]
console.log(a.slice())
/*
without passing arguments
[ 1, 2, 3, 4, 5 ]
*/



console.log()
//on sparse arrays
console.log('on sparse arrays')

console.log([1, 2, , 4, 5].slice(1, 4));
/*
on sparse arrays
[ 2, <1 empty item>, 4 ]
*/


console.log()
// on non-array objects
console.log('on non-array objects')

arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
/*
on non-array objects
[ 3, 4 ]
*/