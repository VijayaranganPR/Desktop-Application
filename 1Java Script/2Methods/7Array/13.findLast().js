/**
The findLast() method iterates the array in reverse order and 
returns the value of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, undefined is returned.

The findLast() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.

findLast() does not mutate the array on which it is called, 
but the function provided as callbackFn can. 
Note, however, that the length of the array is saved before the first invocation of callbackFn.
 */


// simple example - return value
console.log('simple example - return value')

inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "bananas", quantity: 4 },
    { name: "cherries", quantity: 5 },
  ];

function findBest(x,i,arr){
    if (x.quantity>3){
        return true
    }
    else{
        return false
    }
}
console.log(inventory.findLast(findBest)) // { name: 'cherries', quantity: 5 }



console.log()
// simple example - return undefined
console.log('simple example - return undefined')

inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "bananas", quantity: 4 },
    { name: "cherries", quantity: 5 },
  ];

function findBest1(x,i,arr){
    if (x.quantity>5){
        return true
    }
    else{
        return false
    }
}
console.log(inventory.findLast(findBest1)) // undefined



console.log()
// without returning - returns undefined
console.log('without returning')

function checkreturn(x,i,a){
    console.log(`x = ${x}, i = ${i}, array = ${a}`)
}
a = [1,2,3,4,5]
returned = a.findLast(checkreturn)
console.log(a, returned)
/*
without returning
x = 5, i = 4, array = 1,2,3,4,5
x = 4, i = 3, array = 1,2,3,4,5
x = 3, i = 2, array = 1,2,3,4,5
x = 2, i = 1, array = 1,2,3,4,5
x = 1, i = 0, array = 1,2,3,4,5
[ 1, 2, 3, 4, 5 ] undefined
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

console.log([1,2,3,,5].findLast((x) => {
    console.log(x)
    if (x===undefined){
        return true
    }
    else{
        return false
    }
}))

/**
5
undefined
undefined
 */



console.log()
// adding in back
console.log('adding in back')

a = [1,2,3,4,5]
function initial(x,i,arr){
    console.log(`Returned = ${arr.push(x)}, x = ${x}, i = ${i}, array = ${a}`)
    return x>5
}
console.log(a.findLast(initial), a)  
/*
adding in back
Returned = 6, x = 5, i = 4, array = 1,2,3,4,5,5
Returned = 7, x = 4, i = 3, array = 1,2,3,4,5,5,4
Returned = 8, x = 3, i = 2, array = 1,2,3,4,5,5,4,3
Returned = 9, x = 2, i = 1, array = 1,2,3,4,5,5,4,3,2
Returned = 10, x = 1, i = 0, array = 1,2,3,4,5,5,4,3,2,1
undefined [
  1, 2, 3, 4, 5,
  5, 4, 3, 2, 1
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
console.log(a.findLast(initial1), a) 
/*
adding in frount
Returned = 6, x = 5, i = 4, array = 5,1,2,3,4,5
Returned = 7, x = 3, i = 3, array = 3,5,1,2,3,4,5
Returned = 8, x = 1, i = 2, array = 1,3,5,1,2,3,4,5
Returned = 9, x = 3, i = 1, array = 3,1,3,5,1,2,3,4,5
Returned = 10, x = 3, i = 0, array = 3,3,1,3,5,1,2,3,4,5
undefined [
  3, 3, 1, 3, 5,
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
console.log(a.findLast(initial2), a)  
/**
removing from back
Returned = 5, x = 5, i = 4, array = 1,2,3,4
Returned = 4, x = 4, i = 3, array = 1,2,3
Returned = 3, x = 3, i = 2, array = 1,2
Returned = 2, x = 2, i = 1, array = 1
Returned = 1, x = 1, i = 0, array =
undefined []
 */


console.log()
// removing from frount
console.log('removing from frount')

a = [1,2,3,4,5]
function initial3(x,i,arr){
    console.log(`Returned = ${arr.shift()}, x = ${x}, i = ${i}, array = ${a}`)
    return x>5
}
console.log(a.findLast(initial3), a)  
/**
removing from frount
Returned = 1, x = 5, i = 4, array = 2,3,4,5
Returned = 2, x = 5, i = 3, array = 3,4,5
Returned = 3, x = 5, i = 2, array = 4,5
Returned = 4, x = 5, i = 1, array = 5
Returned = 5, x = 5, i = 0, array =
undefined []
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
  console.log(Array.prototype.findLast.call(arrayLike, (x) => !Number.isInteger(x)));
  // 7.3