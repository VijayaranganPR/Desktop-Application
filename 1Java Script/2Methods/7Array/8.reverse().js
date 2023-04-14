/**
 * The reference to the original array, now reversed. 
 * Note that the array is reversed in place, and no copy is made.
 * 
 * The reverse() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties.
 * 
 * its a mutating method
 */

// simple example
console.log('simple example')

a = [1,2,3,,,5]
reference = a.reverse()
reference[0] = 10000
console.log(reference,a) // [ 10000, <2 empty items>, 3, 2, 1 ] [ 10000, <2 empty items>, 3, 2, 1 ]



console.log()
// reversing without affecting original
console.log('reversing without affecting original')

a = [1,2,3,,,5]
reference = [...a].reverse()
reference[0] = 10000
console.log(reference,a) // [ 10000, undefined, undefined, 3, 2, 1 ] [ 1, 2, 3, <2 empty items>, 5 ]



console.log()
// on non-array objects
console.log('on non-array objects')

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
  console.log(Array.prototype.reverse.call(arrayLike));
  // { '0': 4, length: 3, unrelated: 'foo' }
  // The '2' index is replaced because the '0' index was not present originally