/*
The indexOf() method returns the first index at which a given element can be found in the array,
 or -1 if it is not present.

skip undefined
*/

// Simple Exmaple
console.log("Simple Exmaple")

a = [2, 9, 9];
console.log(a.indexOf(2)); // 0
console.log(a.indexOf(7)); // -1
console.log(a.indexOf(9, 2)); // 2
console.log(a.indexOf(2, -1)); // -1
console.log(a.indexOf(2, -3)); // 0


console.log()
// if no arguments passed
console.log('if no arguments passed')

a = [2, 9, 9];
console.log(a.indexOf());
/*
if no arguments passed
-1
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

a = [1, , 3]
console.log([1, , 3].indexOf(undefined));
/*
on sparse arrays
-1
*/



console.log()
// on non-array objects
console.log('on non-array objects')
arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
console.log(Array.prototype.indexOf.call(arrayLike, 5));
/*
on non-array objects
0
-1
*/