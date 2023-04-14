/*
The includes() method determines whether an array includes a certain value among its entries, 
returning true or false as appropriate.

reads undefined
*/

console.log()
// simple example
console.log('simple example')
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true
console.log(["1", "2", "3"].includes(3)); // false



console.log()
// if no arguments passed -- searches for empty or undefined
console.log('if no arguments passed')

a = [2, 9,, 9];
console.log(a.includes());
/*
if no arguments passed
true
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

a = [1, , 3]
console.log([1, , 3].includes(undefined));
/*
on sparse arrays
true
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
console.log(Array.prototype.includes.call(arrayLike, 2));
console.log(Array.prototype.includes.call(arrayLike, 5));
/*
on non-array objects
true
false
*/
