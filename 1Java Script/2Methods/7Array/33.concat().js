/**
 * The concat() method is used to merge two or more arrays. 
 * This method does not change the existing arrays, but instead returns a new array.
 * Its a generic array method. 
 
Syntax
concat(value0, value1, ... valueN)
 
*/
const a = [1,2,3,4]
const b = [5,6,7,8]
let c = a.concat(b) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(c)


console.log()
// concatinating three array
d = [11,12]
c = a.concat(b,d);
console.log(c) // [1, 2, 3, 4, 5, 6, 7, 8, 11, 12]


console.log()
// concatinating with values
c = a.concat(b,9,10,d)
console.log(c)  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


console.log()
// concatinatin nested array
e = [a,b]
c = e.concat(d)
console.log(c) // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], 11, 12 ]


console.log()
// Using concat() on sparse arrays
e = [1,,2,,3]
c = a.concat(e)
console.log(c) // [ 1, 2, 3, 4, 1, <1 empty item>, 2, <1 empty item>, 3 ]


console.log()
// Concatenating array-like objects with [Symbol.isConcatSpreadable]
const arrayLike = {
    length : 4,
    0: 1,
    1: 2,
    2: 3,
    3: 4
}
const arrayLike2 = {
    length : 4,
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    [Symbol.isConcatSpreadable] : true
}
console.log([].concat(arrayLike,arrayLike2)) // [ { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }, 1, 2, 3, 4 ]


// without passing parameter - return only first array
console.log(a.concat()) // [ 1, 2, 3, 4 ]