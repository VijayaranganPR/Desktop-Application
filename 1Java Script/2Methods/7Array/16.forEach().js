/*
A miniature of for loop with array and function

The forEach() method executes a provided function once for each array element.

forEach() does not mutate the array on which it is called, 
but the function provided as callbackFn can. 
Note, however, that the length of the array is saved before the first invocation of callbackFn.

The forEach() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.

callbackFn is invoked only for array indexes which have assigned values. 
It is not invoked for empty slots in sparse arrays.
*/

// simple example
console.log('simple example')

a = [1,2,3,4,5]
returned = a.forEach((x)=> console.log(x))
console.log(a,returned)
/*
simple example
1
2
3
4
5
[ 1, 2, 3, 4, 5 ] undefined
*/



console.log()
// without returning - returns undefined
console.log('without returning')

function checkreturn(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,3,4,5]
returned = a.forEach(checkreturn)
console.log(a, returned)
/*
without returning
x = 1, i = 0, array = 1,2,3,4,5
x = 2, i = 1, array = 1,2,3,4,5
x = 3, i = 2, array = 1,2,3,4,5
x = 4, i = 3, array = 1,2,3,4,5
x = 5, i = 4, array = 1,2,3,4,5
[ 1, 2, 3, 4, 5 ] undefined
*/


console.log()
// on sparse
console.log('on sparse')

function print(x, i, arr){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,undefined,,5]
returned = a.forEach(print)
console.log(a, returned)
/*
x = 1, i = 0, array = 1,2,,,5
x = 2, i = 1, array = 1,2,,,5
x = undefined, i = 2, array = 1,2,,,5
x = 5, i = 4, array = 1,2,,,5
[ 1, 2, undefined, <1 empty item>, 5 ] undefined
*/


console.log()
// sum array elements
console.log('sum array elements')

sum = 0
a = [1,2,3,4,,,5]
returned = a.forEach((x)=>{
    sum += x
})

console.log(sum)
/*
sum array elements
15
*/



console.log()
// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(x,i,arr){
    console.log(`Returned = ${arr.push(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return x>5
}
console.log(a.forEach(initial), a)  
/*
adding in back
Returned = 6, x = 1, i = 0, array = 1,2,3,4,5,1
Returned = 7, x = 2, i = 1, array = 1,2,3,4,5,1,2
Returned = 8, x = 3, i = 2, array = 1,2,3,4,5,1,2,3
Returned = 9, x = 4, i = 3, array = 1,2,3,4,5,1,2,3,4
Returned = 10, x = 5, i = 4, array = 1,2,3,4,5,1,2,3,4,5
undefined [
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
    return x>6
}
console.log(a.forEach(initial1), a) 
/*
adding in frount
Returned = 6, x = 1, i = 0, array = 1,1,2,3,4,5
Returned = 7, x = 1, i = 1, array = 1,1,1,2,3,4,5
Returned = 8, x = 1, i = 2, array = 1,1,1,1,2,3,4,5
Returned = 9, x = 1, i = 3, array = 1,1,1,1,1,2,3,4,5
Returned = 10, x = 1, i = 4, array = 1,1,1,1,1,1,2,3,4,5
undefined [
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
    return x>5
}
console.log(a.forEach(initial2), a)  
/**
removing from back
Returned = 5, x = 1, i = 0, array = 1,2,3,4
Returned = 4, x = 2, i = 1, array = 1,2,3
Returned = 3, x = 3, i = 2, array = 1,2
undefined [ 1, 2 ]
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(x,i,arr){
    console.log(`Returned = ${arr.shift()}, x = ${x}, i = ${i}, array = ${a}`)
    return x>5
}
console.log(a.forEach(initial3), a)  
/**
removing from frount
Returned = 1, x = 1, i = 0, array = 2,3,4,5
Returned = 2, x = 3, i = 1, array = 3,4,5
Returned = 3, x = 5, i = 2, array = 4,5
undefined [ 4, 5 ]
 */



console.log()
// on arrayLike object
console.log('on arrayLike object')

const arrayLike = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
  };
  console.log(Array.prototype.forEach.call(arrayLike, (x) =>console.log(x)));
/*
  on arrayLike object
2
7.3
4
undefined
*/