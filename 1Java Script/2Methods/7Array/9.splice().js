/**
 * The splice() method changes the contents of an array by removing or replacing existing elements 
 * and/or adding new elements in place. 
 * To access part of an array without modifying it, see slice().
 * 
 * 
 * returns An array containing the deleted elements.
 * 
 * The splice() method is a mutating method. 
 * It may change the content of this. 
 * If the specified number of elements to insert differs from the number of elements being removed, 
 * the array's length will be changed as well. 
 * At the same time, it uses @@species to create a new array instance to be returned.
 * 
 * 
 * The splice() method is generic. 
 * It only expects the this value to have a length property and integer-keyed properties.
 * 
 * syntax
 * splice(start, deleteCount, item1, item2, itemN)
 */

console.log()
// simple example
console.log('simple example')

a = [1,2,3,4,5,6]
deleted = a.splice(1,3,'2','3','4','5')
console.log(a,deleted)  // [1, '2', '3', '4', '5', 5, 6] [ 2, 3, 4 ]



console.log()
// no element added
console.log('no element added')

a = [1,2,3,4,5,6]
deleted = a.splice(1,3)
console.log(a,deleted)  // [ 1, 5, 6 ] [ 2, 3, 4 ]



console.log()
// no element deleted
console.log('no element deleted')

a = [1,2,3,4,5,6]
deleted = a.splice(1,0,'2','3','4','5')
console.log(a,deleted)  // [1, '2', '3', '4', '5', 2, 3, 4, 5, 6] []


console.log()
// no element added and no element deleted
console.log('no element added and no element deleted')

a = [1,2,3,4,5,6]
deleted = a.splice(3)
console.log(a,deleted)  // [ 1, 2, 3 ] [ 4, 5, 6 ]


console.log()
// using arrayLike object
console.log('using arrayLike object')

const arrayLike = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
  };

deleted = Array.prototype.splice.call(arrayLike, 0, 1, 2, 3)
console.log(arrayLike, deleted);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' } [ 5 ]

