/*
The map() method creates a new array populated with 
the results of calling a provided function on every element in the calling array.

callbackFn is invoked only for array indexes which have assigned values. 
It is not invoked for empty slots in sparse arrays.

The map() method is a copying method. 
It does not alter this. However, the function provided as callbackFn can mutate the array. 

The map() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.
*/

// Simple example
console.log('Simple example')

a = [1,2,3,4,5]
returned = a.map((x) => x**2)
console.log(a,returned)
/*
Simple example
[ 1, 2, 3, 4, 5 ] [ 1, 4, 9, 16, 25 ]
*/



console.log()
// without returning - returns empty array
console.log('without returning')

function checkreturn(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,3,4,5]
returned = a.map(checkreturn)
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
    return x**2
}
a = [1,2,undefined,,5]
returned = a.map(checkSparse)
console.log(a,returned)
/*
on sparse
x = 1, i = 0, array = 1,2,,,5
x = 2, i = 1, array = 1,2,,,5
x = undefined, i = 2, array = 1,2,,,5
x = 5, i = 4, array = 1,2,,,5
[ 1, 2, undefined, <1 empty item>, 5 ] [ 1, 4, NaN, <1 empty item>, 25 ]
*/



console.log()
// converting string to int
console.log('converting string to int')

console.log()
// don't do this
console.log('don\'t do this')

a = ['1', '2', '3', '4', '5']
returned = a.map(parseInt)  // index will be considered as redix
console.log(a,returned)
/*
don't do this
[ '1', '2', '3', '4', '5' ] [ 1, NaN, NaN, NaN, NaN ]
*/

console.log()
// do this
console.log('do this')
a = ['1', '2', '3', '4e3', '5.5']
returned = a.map((x) => parseInt(x))
console.log(a,returned)
/*
converting string to int
[ '1', '2', '3', '4e3', '5.5' ] [ 1, 2, 3, 4, 5 ]
*/

console.log()
// or this
console.log('or this')
a = ['1', '2', '3', '4e3', '5.5']
returned = a.map((x) => Number(x))
console.log(a,returned)
/*
or this
[ '1', '2', '3', '4e3', '5.5' ] [ 1, 2, 3, 4000, 5.5 ]
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
    return x**2
}
console.log(a.map(initial), a)  
/*
adding in back
Returned = 6, x = 1, i = 0, array = 1,2,3,4,5,1
Returned = 7, x = 2, i = 1, array = 1,2,3,4,5,1,2
Returned = 8, x = 3, i = 2, array = 1,2,3,4,5,1,2,3
Returned = 9, x = 4, i = 3, array = 1,2,3,4,5,1,2,3,4
Returned = 10, x = 5, i = 4, array = 1,2,3,4,5,1,2,3,4,5
[ 1, 4, 9, 16, 25 ] [
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
    return x**2
}
console.log(a.map(initial1), a) 
/*
adding in frount
Returned = 6, x = 1, i = 0, array = 1,1,2,3,4,5
Returned = 7, x = 1, i = 1, array = 1,1,1,2,3,4,5
Returned = 8, x = 1, i = 2, array = 1,1,1,1,2,3,4,5
Returned = 9, x = 1, i = 3, array = 1,1,1,1,1,2,3,4,5
Returned = 10, x = 1, i = 4, array = 1,1,1,1,1,1,2,3,4,5
[ 1, 1, 1, 1, 1 ] [
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
    return x**2
}
console.log(a.map(initial2), a)  
/**
removing from back
Returned = 5, x = 1, i = 0, array = 1,2,3,4
Returned = 4, x = 2, i = 1, array = 1,2,3
Returned = 3, x = 3, i = 2, array = 1,2
[ 1, 4, 9, <2 empty items> ] [ 1, 2 ]
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(x,i,arr){
    console.log(`Returned = ${arr.shift()}, x = ${x}, i = ${i}, array = ${a}`)
    return x**2
}
console.log(a.map(initial3), a)  
/**
removing from frount
Returned = 1, x = 1, i = 0, array = 2,3,4,5
Returned = 2, x = 3, i = 1, array = 3,4,5
Returned = 3, x = 5, i = 2, array = 4,5
[ 1, 9, 25, <2 empty items> ] [ 4, 5 ]
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
  console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
/*
non-array objects
[ 4, 9, 16 ]
*/