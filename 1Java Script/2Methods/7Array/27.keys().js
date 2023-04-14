/*
The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

When used on sparse arrays, the keys() method iterates empty slots as if they have the value undefined.

The keys() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/

// Simple Example
console.log('Simple Example')
a = [1,2,3,4,5]
iterator = a.keys()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
/*
Simple Example
0
1
2
3
4
undefined
*/



// getting all values
console.log(`getting all values`);

arr = [1,2,3,4]
iterator = arr.keys()
console.log([...iterator])
/*
[ 0, 1, 2, 3 ]
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

a = [1, , , , 5]
iterator = a.keys()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
/*
on sparse arrays
0
1
2
3
4
undefined
*/



console.log()
// Mutations during iteration
console.log('Mutations during iteration')

arr = ["a"];
iterator = arr.keys();
console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next().value); // 0
arr[1] = "n";
console.log(iterator.next().value); // 1



console.log()
// on non-array objects
console.log('on non-array objects')
arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
iterator = Array.prototype.keys.call(arrayLike)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
/*
on non-array objects
0
1
2
undefined
undefined
*/