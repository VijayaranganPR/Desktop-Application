/*
A new array with each element being the result of the callback function 
and flattened by a depth of 1.

The flatMap() method is generic. It only expects the this value to have a length property and integer-keyed properties. 
However, the value returned from callbackFn must be an array if it is to be flattened.


*/

// simple example
console.log('simple example')
a = [1, 2, 3, 4];
console.log(a.flatMap((x) => [x, x * 2]));
/*
simple example
[
  1, 2, 2, 4,
  3, 6, 4, 8
]
*/



console.log()
// without returning - returns empty array
console.log('without returning')

function checkreturn(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,3,4,5]
returned = a.flatMap(checkreturn)
console.log(a, returned)
/*
without returning
x = 1, i = 0, array = 1,2,3,4,5
x = 2, i = 1, array = 1,2,3,4,5
x = 3, i = 2, array = 1,2,3,4,5
x = 4, i = 3, array = 1,2,3,4,5
x = 5, i = 4, array = 1,2,3,4,5
[ 1, 2, 3, 4, 5 ] [ undefined, undefined, undefined, undefined, undefined ]
*/



console.log()
// on sparse
console.log('on sparse')

function checkSparse(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
    return [x, x*2]
}
a = [1,2,undefined,,5]
returned = a.flatMap(checkSparse)
console.log(a,returned)
/*
on sparse
x = 1, i = 0, array = 1,2,,,5
x = 2, i = 1, array = 1,2,,,5
x = undefined, i = 2, array = 1,2,,,5
x = 5, i = 4, array = 1,2,,,5
[ 1, 2, undefined, <1 empty item>, 5 ] [ 1, 2, 2, 4, undefined, NaN, 5, 10 ]
*/



console.log()
// spliting string inside array
console.log('spliting string inside array')

const arr1 = ["it's Sunny in", "", "California"];

// in map()
console.log(arr1.map((x) => x.split(" ")));
// [ [ "it's", 'Sunny', 'in' ], [ '' ], [ 'California' ] ]

// in flatMap()
console.log(arr1.flatMap((x) => x.split(" ")));
// [ "it's", 'Sunny', 'in', '', 'California' ]



console.log()
// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(x,i,arr){
    console.log(`Returned = ${arr.push(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return [x, x*2]
}
console.log(a.flatMap(initial), a)  
/*
adding in back
Returned = 6, x = 1, i = 0, array = 1,2,3,4,5,1
Returned = 7, x = 2, i = 1, array = 1,2,3,4,5,1,2
Returned = 8, x = 3, i = 2, array = 1,2,3,4,5,1,2,3
Returned = 9, x = 4, i = 3, array = 1,2,3,4,5,1,2,3,4
Returned = 10, x = 5, i = 4, array = 1,2,3,4,5,1,2,3,4,5
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
] [
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
    return [x, x*2]
}
console.log(a.flatMap(initial1), a) 
/*
adding in frount
Returned = 6, x = 1, i = 0, array = 1,1,2,3,4,5
Returned = 7, x = 1, i = 1, array = 1,1,1,2,3,4,5
Returned = 8, x = 1, i = 2, array = 1,1,1,1,2,3,4,5
Returned = 9, x = 1, i = 3, array = 1,1,1,1,1,2,3,4,5
Returned = 10, x = 1, i = 4, array = 1,1,1,1,1,1,2,3,4,5
[
  1, 2, 1, 2, 1,
  2, 1, 2, 1, 2
] [
[ 1, 2, 2, 4, 3, 6 ] [ 1, 2 ]
*/




console.log()
// removing from back
console.log('removing from back')

a = [1,2,3,4,5]
function initial2(x,i,arr){
    console.log(`Returned = ${arr.pop()}, x = ${x}, i = ${i}, array = ${a}`)
    return [x, x*2]
}
console.log(a.flatMap(initial2), a)  
/**
removing from back
Returned = 5, x = 1, i = 0, array = 1,2,3,4
Returned = 4, x = 2, i = 1, array = 1,2,3
Returned = 3, x = 3, i = 2, array = 1,2
[ 1, 2, 2, 4, 3, 6 ] [ 1, 2 ]
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(x,i,arr){
    console.log(`Returned = ${arr.shift()}, x = ${x}, i = ${i}, array = ${a}`)
    return [x, x*2]
}
console.log(a.flatMap(initial3), a)  
/**
removing from frount
Returned = 1, x = 1, i = 0, array = 2,3,4,5
Returned = 2, x = 3, i = 1, array = 3,4,5
Returned = 3, x = 5, i = 2, array = 4,5
[ 1, 2, 3, 6, 5, 10 ] [ 4, 5 ]
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
  console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x*2]));
/*
non-array objects
[ 2, 4, 3, 6, 4, 8 ]
*/
