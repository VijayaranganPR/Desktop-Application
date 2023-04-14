/**
 * The shift() method removes the first element from an array and returns that removed element. 
 * This method changes the length of the array.
 * 
 * 
 * The removed element from the array; undefined if the array is empty.
 * 
 * The unshift() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties. 
 * 
 * The push() method is a mutating method. It changes the length and the content of this. 
 */


// simple example
console.log('simple example')

a = [,,5,6,7,8,9]
len = a.shift()
console.log(a,len) // [ <1 empty item>, 5, 6, 7, 8, 9 ] undefined



console.log()
// shift() on non-array objects 
// if lenght = 0 it pops undefined, and nothing will be removed
console.log('unshift() on non-array objects')

arrayLike = {
    length: 4,
    1:1,
    2:2,
    3:3
}
len = Array.prototype.shift.call(arrayLike)
console.log(arrayLike,len) // { '0': 1, '1': 2, '2': 3, length: 3 } undefined