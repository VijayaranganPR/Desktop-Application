/**
 * The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
When used on sparse arrays, the entries() method iterates empty slots as if they have the value undefined.

The entries() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/

// calling using next().value
arr = [1,2,3,4]
iterator = arr.entries()
console.log(iterator.next().value) // [ 0, 1 ]
console.log(iterator.next().value) // [ 1, 2 ]
console.log(iterator.next().value) // [ 2, 3 ]
console.log(iterator.next().value) // [ 3, 4 ]
console.log(iterator.next().value) // undefined



// getting all values
console.log(`getting all values`);

arr = [1,2,3,4]
iterator = arr.entries()
console.log([...iterator])
/*
[ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]
*/



console.log()
// getting value in for of
arr = [1,2,3,4]
for (const i of arr.entries()){
    console.log(i)
}
/**
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
 */


console.log()
// getting key and value in for of
arr = [1,2,3,4]
for (const [ind, val] of arr.entries()){
    console.log(ind,val)
}
/*
0 1
1 2
2 3
3 4
*/


console.log()
// iterating sparse array
arr = [1,,,,4]
for (const [ind, val] of arr.entries()){
    console.log(ind,val)
}
/**
0 1
1 undefined
2 undefined
3 undefined
4 4
 */



console.log()
// Mutations during iteration
console.log('Mutations during iteration')

arr = ["a", "b", "c", "d", "e"];
iterator = arr.entries();
console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next().value); // [ 0, 'a' ]
arr[1] = "n";
console.log(iterator.next().value); // [ 1, 'n' ]



console.log()
// calling in a array like object 
// a index is not considered
// index 2 will be undefined
arrayLike = {
    0: 1,
    1: 2,
    3: 4,
    4: 5,
    a: 6,
    length: 5
}
for (const [ind, val] of Array.prototype.entries.call(arrayLike)){
    console.log(ind,val)
}
/**
0 1
1 2
2 undefined
3 4
4 5
 */