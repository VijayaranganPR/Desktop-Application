/**
The every() method is an iterative method. 

It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. 
If such an element is found, every() immediately returns false and stops iterating through the array. 
Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.

callbackFn will not visit any elements added beyond the array's initial length when the call to some() began

callbackFn is invoked only for array indexes which have assigned values. 
It is not invoked for empty slots in sparse arrays.
*/

// Simple every() use
console.log('Simple every() use')

arr = [11,2,31,41]
console.log(arr.every((x)=>x>10)) // false
arr = [11,12,31,41]
console.log(arr.every((x)=>x>10)) // true



console.log()
// comparing two arrays
console.log('comparing two arrays')

a = [1,2,3,4]
b = [1,2,3,4,5,6]
console.log(a.every((x,i)=> x == b[i])) // true



console.log()
// without returning - returns false
console.log('without returning')

function checkreturn(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,3,4,5]
returned = a.every(checkreturn)
console.log(a, returned)
/*
without returning
x = 1, i = 0, array = 1,2,3,4,5
[ 1, 2, 3, 4, 5 ] false
*/



console.log()
// on sparse array - doesn't conside empty space
console.log('on sparse array')

a = [1,1,1,1,,,,1,1,1]
console.log(a.every((x)=> x===1)) // true
console.log(a.every((x)=> x!==undefined)) // true



console.log()
// Affecting Initial Array
// each time the condition will check the affected array only



// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(x,i,arr){
    console.log(`Returned = ${arr.push(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return x>0
}
console.log(a.every(initial), a)  
/*
adding in back
Returned = 6, x = 1, i = 0, array = 1,2,3,4,5,1
Returned = 7, x = 2, i = 1, array = 1,2,3,4,5,1,2
Returned = 8, x = 3, i = 2, array = 1,2,3,4,5,1,2,3
Returned = 9, x = 4, i = 3, array = 1,2,3,4,5,1,2,3,4
Returned = 10, x = 5, i = 4, array = 1,2,3,4,5,1,2,3,4,5
true [
  1, 2, 3, 4, 5,
  1, 2, 3, 4, 5
]
*/


console.log()
// adding in frount --> checking same element
console.log('adding in frount')

a = [1,2,3,4,5]
function initial1(x,i,arr){
    console.log(`Returned = ${arr.unshift(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return x<2
}
console.log(a.every(initial1), a) 
/*
adding in frount
Returned = 6, x = 1, i = 0, array = 1,1,2,3,4,5
Returned = 7, x = 1, i = 1, array = 1,1,1,2,3,4,5
Returned = 8, x = 1, i = 2, array = 1,1,1,1,2,3,4,5
Returned = 9, x = 1, i = 3, array = 1,1,1,1,1,2,3,4,5
Returned = 10, x = 1, i = 4, array = 1,1,1,1,1,1,2,3,4,5
true [
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
    return x<6
}
console.log(a.every(initial2), a)  // true [ 1, 2 ]
/**
removing from back
Returned = 5, x = 1, i = 0, array = 1,2,3,4
Returned = 4, x = 2, i = 1, array = 1,2,3
Returned = 3, x = 3, i = 2, array = 1,2
true [ 1, 2 ]
 */



console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(x,i,arr){
    console.log(`Returned = ${arr.shift()}, x = ${x}, i = ${i}, array = ${a}`)
    return x<6
}
console.log(a.every(initial3), a)  
/**
removing from frount
Returned = 1, x = 1, i = 0, array = 2,3,4,5
Returned = 2, x = 3, i = 1, array = 3,4,5
Returned = 3, x = 5, i = 2, array = 4,5
true [ 4, 5 ]
 */



console.log()
// adding element and checking false before end
// once the false reached the execution will stop
console.log('adding element and checking false before end')

a = [1,2,3,4,5]
function initial4(x,i,arr){
    arr.push(x)
    return x<3
}
console.log(a.every(initial4), a)  // false [1, 2, 3, 4, 5, 1, 2, 3]


console.log()
// calling every() in arrayLike object
console.log('calling every() in arrayLike object')

a = {
    length: 4,
    0: 1,
    1: 2,
    3: 4
}
console.log(Array.prototype.every.call(a,(x)=> typeof x === "number"), a) 
// true { '0': 1, '1': 2, '3': 4, length: 4 }