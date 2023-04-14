/*
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. 
Otherwise the array element at index 0 is used as the initial value and 
iteration starts from the next element (index 1 instead of index 0).

syntax -->
reduce((accumulator, currentValue, currentIndex, array) => { // }, initialValue)

TypeError -->
The array contains no elements and initialValue is not provided.

callbackFn is invoked only for array indexes which have assigned values. 
It is not invoked for empty slots in sparse arrays.

Unlike other iterative methods, reduce() does not accept a thisArg argument. 
callbackFn is always called with undefined as this, 
which gets substituted with globalThis if callbackFn is non-strict.

reduce() does not mutate the array on which it is called, but the function provided as callbackFn can. 
Note, however, that the length of the array is saved before the first invocation of callbackFn. 

The reduce() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.
*/

// simple example
console.log('simple example')
a = [1,2,3,4,5]
console.log(a.reduce((a,c) => a+c))
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
returned = a.reduce(checkreturn)
console.log(a, returned)
/*
without returning
accumulator = 1, currentValue = 2, index = 1, array = 1,2,3,4,5
accumulator = undefined, currentValue = 3, index = 2, array = 1,2,3,4,5
accumulator = undefined, currentValue = 4, index = 3, array = 1,2,3,4,5
accumulator = undefined, currentValue = 5, index = 4, array = 1,2,3,4,5
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
returned = a.reduce(checkSparse,0)
console.log(a,returned)
/*
on sparse
accumulator = 0, currentValue = 1, index = 0, array = 1,2,,,5
accumulator = 1, currentValue = 2, index = 1, array = 1,2,,,5
accumulator = 3, currentValue = 5, index = 4, array = 1,2,,,5
[ 1, 2, <2 empty items>, 5 ] 8
*/



console.log()
// with initial value
console.log('simple example')

a = [1,2,3,4,5]
console.log(a.reduce((a,c) => a+c,100))
/*
simple example
115
*/



console.log()
//Flatten an array of arrays
console.log('Flatten an array of arrays')

unflattened = [[0, 1],[2, 3],[4, 5],]
console.log(unflattened.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []));
/*
Flatten an array of arrays
[ 0, 1, 2, 3, 4, 5 ]
*/



console.log()
// Remove duplicate items in an array
console.log('Remove duplicate items in an array')

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

console.log(myArrayWithNoDuplicates);
/*
Remove duplicate items in an array
[ 'a', 'b', 'c', 'e', 'd' ]
*/



console.log()
// to understand well
console.log('to understand well')

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50)); // 100
console.log([50].reduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log([1, 100].reduce(getMax)); // 100

// callback is not invoked
console.log([50].reduce(getMax)); // 50
console.log([].reduce(getMax, 1)); // 1

// console.log([].reduce(getMax)); // TypeError



console.log()
// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(ac,c,i,arr){
    console.log(`Returned = ${arr.push(c)}, accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
console.log(a.reduce(initial), a)  
/*
adding in back
Returned = 6, accumulator = 1, currentValue = 2, index = 1, array = 1,2,3,4,5,2
Returned = 7, accumulator = 3, currentValue = 3, index = 2, array = 1,2,3,4,5,2,3
Returned = 8, accumulator = 6, currentValue = 4, index = 3, array = 1,2,3,4,5,2,3,4
Returned = 9, accumulator = 10, currentValue = 5, index = 4, array = 1,2,3,4,5,2,3,4,5
15 [
  1, 2, 3, 4, 5,
  2, 3, 4, 5
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
console.log(a.reduce(initial1), a) 
/*
adding in frount
Returned = 6, accumulator = 1, currentValue = 2, index = 1, array = 2,1,2,3,4,5
Returned = 7, accumulator = 3, currentValue = 2, index = 2, array = 2,2,1,2,3,4,5
Returned = 8, accumulator = 5, currentValue = 2, index = 3, array = 2,2,2,1,2,3,4,5
Returned = 9, accumulator = 7, currentValue = 2, index = 4, array = 2,2,2,2,1,2,3,4,5
9 [
  2, 2, 2, 2, 1,
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
console.log(a.reduce(initial2), a)  
/**
removing from back
Returned = 5, accumulator = 1, currentValue = 2, index = 1, array = 1,2,3,4
Returned = 4, accumulator = 3, currentValue = 3, index = 2, array = 1,2,3
6 [ 1, 2, 3 ]
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(ac, c, i, arr){
    console.log(`Returned = ${arr.shift()}, accumulator = ${ac}, currentValue = ${c}, index = ${i}, array = ${arr}`)
    return ac+c
}
console.log(a.reduce(initial3), a)  
/**
removing from frount
Returned = 1, accumulator = 1, currentValue = 2, index = 1, array = 2,3,4,5
Returned = 2, accumulator = 3, currentValue = 4, index = 2, array = 3,4,5
7 [ 3, 4, 5 ]
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
  console.log(Array.prototype.reduce.call(arrayLike, (a,c) => a+c));
/*
non-array objects
9
*/
