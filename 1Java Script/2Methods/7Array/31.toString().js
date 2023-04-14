/*
The toString() method returns a string representing the specified array and its elements.

The Array object overrides the toString method of Object. The toString method of arrays calls join() internally, 
which joins the array and returns one string containing each array element separated by commas. 
If the join method is unavailable or is not a function, Object.prototype.toString is used instead, returning [object Array].


*/

// simple Example
console.log('simple Example')

a = [1, 2, "a", "1a"];
console.log(a.toString());
/*
simple Example
1,2,a,1a
*/


console.log()
// on sparse arrays
console.log('on sparse arrays')

console.log([1, , 3].toString());
/*
on sparse arrays
1,,3
*/



console.log()
// on empty arrays - empty character
console.log('on empty arrays')

console.log([].toString());
/*
on empty arrays

*/



console.log()
// on non-array objects
console.log('on non-array objects')

arrayLike = {
    length: 3,
    0: 1,
    1: 2,
    2: 3,
};
console.log(Array.prototype.toString.call(arrayLike));
/*
on non-array objects
[object Object]
*/