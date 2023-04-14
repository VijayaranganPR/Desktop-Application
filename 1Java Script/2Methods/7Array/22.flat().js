/*
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

The flat() method removes empty slots if the array being flattened is sparse. 

The flat() method is generic. It only expects the this value to have a length property and integer-keyed properties. 
However, its elements must be arrays if they are to be flattened.
*/

// Flattening nested arrays
console.log('Flattening nested arrays')

a = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(a.flat())
console.log(a.flat(2))
console.log(a.flat(3))
console.log(a.flat(4))
/*
[ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [Array] ] ] ]
[ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]
[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

a = [1, , 3, ["a", , ["d", , "e"]]];
console.log(a.flat())
console.log(a.flat(2))
/*
on sparse arrays
[ 1, 3, 'a', [ 'd', <1 empty item>, 'e' ] ]
[ 1, 3, 'a', 'd', 'e' ]
*/



console.log()
// non-array objects
console.log('non-array objects')

arrayLike = {
    length: 3,
    0: [1, 2],
    // Array-like objects aren't flattened
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
};
console.log(Array.prototype.flat.call(arrayLike));
/*
non-array objects
[ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
*/