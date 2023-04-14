/**
 * The unshift() method adds one or more elements to the beginning of an array and 
 * returns the new length of the array.
 * 
 * The unshift() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties. 
 * 
 * The unshift() method is a mutating method. It changes the length and the content of this. 
 */


// simple example
console.log('simple example')

a = [,,5,6,7,8,9]
len = a.unshift(1,2,3,4)
console.log(a,len) // [ 1, 2, 3, 4, <2 empty items>, 5, 6, 7, 8, 9 ] 11



console.log()
// unshift() on non-array objects 
// don't make length is 0 then the elements already inside will be overriden
console.log('unshift() on non-array objects')

arrayLike = {
    length: 4,
    1:1,
    2:2,
    3:3
}
len = Array.prototype.unshift.call(arrayLike,1,2,3,4,undefined,6)
console.log(arrayLike,len)
/**
{
  '0': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  '4': undefined,
  '5': 6,
  '7': 1,
  '8': 2,
  '9': 3,
  length: 10
} 10
 */