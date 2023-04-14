/*
The reduceRight() method applies a function against an accumulator and 
each value of the array (from right-to-left) to reduce it to a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. 
Otherwise the array element at index (.length -1) is used as the initial value and 
iteration starts from the last element (index -2 instead of index -1).

syntax -->
reduceRight((accumulator, currentValue, currentIndex, array) => { // }, initialValue)

TypeError -->
The array contains no elements and initialValue is not provided.

callbackFn is invoked only for array indexes which have assigned values. 
It is not invoked for empty slots in sparse arrays.

Unlike other iterative methods, reduceRight() does not accept a thisArg argument. 
callbackFn is always called with undefined as this, 
which gets substituted with globalThis if callbackFn is non-strict.

reduceRight() does not mutate the array on which it is called, but the function provided as callbackFn can. 
Note, however, that the length of the array is saved before the first invocation of callbackFn. 

The reduceRight() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.
*/

// simple example
console.log('simple example')
a = [1,2,3,4,5]
console.log(a.reduceRight((a,c) => a+c))
/*
simple example
15
*/



console.log()
// without returning - returns empty array
console.log('without returning')

function checkreturn(ac, c, i, arr){
    console.log(`accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
}
a = [1,2,3,4,5]
returned = a.reduceRight(checkreturn)
console.log(a, returned)
/*
without returning
accumulator = 5, currentValue = 4, index = 3, array = 1,2,3,4,5
accumulator = undefined, currentValue = 3, index = 2, array = 1,2,3,4,5
accumulator = undefined, currentValue = 2, index = 1, array = 1,2,3,4,5
accumulator = undefined, currentValue = 1, index = 0, array = 1,2,3,4,5
[ 1, 2, 3, 4, 5 ] undefined
*/



console.log()
// on sparse
console.log('on sparse')

function checkSparse(ac, c, i, arr){
    console.log(`accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
a = [1,2,,,5]
returned = a.reduceRight(checkSparse,0)
console.log(a,returned)
/*
on sparse
accumulator = 0, currentValue = 5, index = 4, array = 1,2,,,5
accumulator = 5, currentValue = 2, index = 1, array = 1,2,,,5
accumulator = 7, currentValue = 1, index = 0, array = 1,2,,,5
[ 1, 2, <2 empty items>, 5 ] 8
*/



console.log()
// with initial value
console.log('simple example')

a = [1,2,3,4,5]
console.log(a.reduceRight((a,c) => a+c,100))
/*
simple example
115
*/



console.log()
//Flatten an array of arrays
console.log('Flatten an array of arrays')

unflattened = [[0, 1],[2, 3],[4, 5],]
console.log(unflattened.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue), []));
/*
Flatten an array of arrays
[ 4, 5, 2, 3, 0, 1 ]
*/



console.log()
// Remove duplicate items in an array
console.log('Remove duplicate items in an array')

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduceRight((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);
/*
Remove duplicate items in an array
[ 'd', 'c', 'e', 'b', 'a' ]
*/



console.log()
// to understand well
console.log('to understand well')

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduceRight(getMax, 50)); // 100
console.log([50].reduceRight(getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log([1, 100].reduceRight(getMax)); // 100

// callback is not invoked
console.log([50].reduceRight(getMax)); // 50
console.log([].reduceRight(getMax, 1)); // 1

// console.log([].reduceRight(getMax)); // TypeError



console.log()
// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(ac,c,i,arr){
    console.log(`Returned = ${arr.push(c)}, accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
console.log(a.reduceRight(initial), a)  
/*
adding in back
Returned = 6, accumulator = 5, currentValue = 4, index = 3, array = 1,2,3,4,5,4
Returned = 7, accumulator = 9, currentValue = 3, index = 2, array = 1,2,3,4,5,4,3
Returned = 8, accumulator = 12, currentValue = 2, index = 1, array = 1,2,3,4,5,4,3,2
Returned = 9, accumulator = 14, currentValue = 1, index = 0, array = 1,2,3,4,5,4,3,2,1
15 [
  1, 2, 3, 4, 5,
  4, 3, 2, 1
]
*/



console.log()
// adding in frount --> element shuffle
console.log('adding in frount')

a = [1,2,3,4,5]
function initial1(ac, c, i, arr){
    console.log(`Returned = ${arr.unshift(c)}, accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
console.log(a.reduceRight(initial1), a) 
/*
adding in frount
Returned = 6, accumulator = 5, currentValue = 4, index = 3, array = 4,1,2,3,4,5
Returned = 7, accumulator = 9, currentValue = 2, index = 2, array = 2,4,1,2,3,4,5
Returned = 8, accumulator = 11, currentValue = 4, index = 1, array = 4,2,4,1,2,3,4,5
Returned = 9, accumulator = 15, currentValue = 4, index = 0, array = 4,4,2,4,1,2,3,4,5
19 [
  4, 4, 2, 4, 1,
  2, 3, 4, 5
]
*/




console.log()
// removing from back
console.log('removing from back')

a = [1,2,3,4,5]
function initial2(ac, c, i, arr){
    console.log(`Returned = ${arr.pop()}, accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
console.log(a.reduceRight(initial2), a)  
/**
removing from back
Returned = 5, accumulator = 5, currentValue = 4, index = 3, array = 1,2,3,4
Returned = 4, accumulator = 9, currentValue = 3, index = 2, array = 1,2,3
Returned = 3, accumulator = 12, currentValue = 2, index = 1, array = 1,2
Returned = 2, accumulator = 14, currentValue = 1, index = 0, array = 1
15 [ 1 ]
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(ac, c, i, arr){
    console.log(`Returned = ${arr.shift()}, accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
console.log(a.reduceRight(initial3), a)  
/**
removing from frount
Returned = 1, accumulator = 5, currentValue = 4, index = 3, array = 2,3,4,5
Returned = 2, accumulator = 9, currentValue = 4, index = 2, array = 3,4,5
Returned = 3, accumulator = 13, currentValue = 4, index = 1, array = 4,5
Returned = 4, accumulator = 17, currentValue = 4, index = 0, array = 5
21 [ 5 ]
 */


console.log()
// non-array objects
console.log('non-array objects')

arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.reduceRight.call(arrayLike, (a,c) => a+c));
/*
non-array objects
9
*/
