/*
The values() method returns a new array iterator object that iterates the value of each index in the array.

When used on sparse arrays, the values() method iterates empty slots as if they have the value undefined.

The values() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/


// Simple Example
console.log('Simple Example')
a = [1,2,3,4,5]
iterator = a.values()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
/*
Simple Example
1
2
3
4
5
undefined
*/



// getting all values
console.log(`getting all values`);

arr = [1,2,3,4]
iterator = arr.values()
console.log([...iterator])
/*
[ 1, 2, 3, 4 ]
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

a = [1, , , , 5]
iterator = a.values()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
/*
on sparse arrays
1
undefined
undefined
undefined
5
undefined
*/



console.log()
// Mutations during iteration
console.log('Mutations during iteration')

arr = ["a", "b", "c", "d", "e"];
iterator = arr.values();
console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"



console.log()
// on non-array objects
console.log('on non-array objects')
arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
iterator = Array.prototype.values.call(arrayLike)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
/*
on non-array objects
2
3
4
undefined
undefined
*/