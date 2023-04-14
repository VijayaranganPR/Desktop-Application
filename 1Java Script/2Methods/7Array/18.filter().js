/*
returns a shallow copy of a portion of the given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function. 
If no elements pass the test, an empty array will be returned.

callbackFn is invoked only for array indexes which have assigned values. 
It is not invoked for empty slots in sparse arrays.

The filter() method is a copying method. 
It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array (with some filtered out). 
However, the function provided as callbackFn can mutate the array. 
Note, however, that the length of the array is saved before the first invocation of callbackFn.

The filter() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.
*/

// simple example 
console.log('simple example')

a = [1,2,3,4,5]
returned = a.filter((x)=> x%2==0)
console.log(a, returned)
/*
simple example
[ 1, 2, 3, 4, 5 ] [ 2, 4 ]
*/



console.log()
// without returning - returns empty array
console.log('without returning')

function checkreturn(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,3,4,5]
returned = a.filter(checkreturn)
console.log(a, returned)
/*
without returning
x = 1, i = 0, array = 1,2,3,4,5
x = 2, i = 1, array = 1,2,3,4,5
x = 3, i = 2, array = 1,2,3,4,5
x = 4, i = 3, array = 1,2,3,4,5
x = 5, i = 4, array = 1,2,3,4,5
[ 1, 2, 3, 4, 5 ] []
*/



console.log()
// on sparse
console.log('on sparse')


function checkSparse(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
    return x%2 == 0
}
a = [1,2,undefined,,5]
returned = a.filter(checkSparse)
console.log(a,returned)
/*
on sparse
x = 1, i = 0, array = 1,2,,,5
x = 2, i = 1, array = 1,2,,,5
x = undefined, i = 2, array = 1,2,,,5
x = 5, i = 4, array = 1,2,,,5
[ 1, 2, undefined, <1 empty item>, 5 ] [ 2 ]
*/


console.log()
// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(x,i,arr){
    console.log(`Returned = ${arr.push(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return x%2==0
}
console.log(a.filter(initial), a)  
/*
adding in back
Returned = 6, x = 1, i = 0, array = 1,2,3,4,5,1
Returned = 7, x = 2, i = 1, array = 1,2,3,4,5,1,2
Returned = 8, x = 3, i = 2, array = 1,2,3,4,5,1,2,3
Returned = 9, x = 4, i = 3, array = 1,2,3,4,5,1,2,3,4
Returned = 10, x = 5, i = 4, array = 1,2,3,4,5,1,2,3,4,5
[ 2, 4 ] [
  1, 2, 3, 4, 5,
  1, 2, 3, 4, 5
]
*/



console.log()
// adding in frount --> element shuffle
console.log('adding in frount')

a = [1,2,3,4,5]
function initial1(x,i,arr){
    console.log(`Returned = ${arr.unshift(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return x%2==0
}
console.log(a.filter(initial1), a) 
/*
adding in frount
Returned = 6, x = 1, i = 0, array = 1,1,2,3,4,5
Returned = 7, x = 1, i = 1, array = 1,1,1,2,3,4,5
Returned = 8, x = 1, i = 2, array = 1,1,1,1,2,3,4,5
Returned = 9, x = 1, i = 3, array = 1,1,1,1,1,2,3,4,5
Returned = 10, x = 1, i = 4, array = 1,1,1,1,1,1,2,3,4,5
[] [
  1, 1, 1, 1, 1,
  1, 2, 3, 4, 5
]
*/




console.log()
// removing from back
console.log('removing from back')

a = [1,2,3,4,5]
function initial2(x,i,arr){
    console.log(`Returned = ${arr.pop()}, x = ${x}, i = ${i}, array = ${a}`)
    return x%2==0
}
console.log(a.filter(initial2), a)  
/**
removing from back
Returned = 5, x = 1, i = 0, array = 1,2,3,4
Returned = 4, x = 2, i = 1, array = 1,2,3
Returned = 3, x = 3, i = 2, array = 1,2
[ 2 ] [ 1, 2 ]
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(x,i,arr){
    console.log(`Returned = ${arr.shift()}, x = ${x}, i = ${i}, array = ${a}`)
    return x%2==0
}
console.log(a.filter(initial3), a)  
/**
removing from frount
Returned = 1, x = 1, i = 0, array = 2,3,4,5
Returned = 2, x = 3, i = 1, array = 3,4,5
Returned = 3, x = 5, i = 2, array = 4,5
[] [ 4, 5 ]
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
  console.log(Array.prototype.filter.call(arrayLike, (x) => x % 2==0));
/*
non-array objects
[ 2, 4 ]
*/
