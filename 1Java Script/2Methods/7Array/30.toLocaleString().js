/*
The toLocaleString() method returns a string representing the elements of the array. 
The elements are converted to Strings using their toLocaleString methods and 
these Strings are separated by a locale-specific String (such as a comma ",").

syntax
toLocaleString(locales, options)

When used on sparse arrays, the toLocaleString() method iterates empty slots as if they have the value undefined.

The toLocaleString() method is generic. 
It only expects the this value to have a length property and integer-keyed properties.

*/

// simple example
console.log('simple example')

const prices = ["￥7", 500, 8123, 12];
console.log(prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }));
/*
simple example
￥7,￥500,￥8,123,￥12
*/



console.log()
// on sparse arrays
console.log('on sparse arrays')

console.log([1, , 3].toLocaleString());
/*
on sparse arrays
1,,3
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
console.log(Array.prototype.toLocaleString.call(arrayLike));
/*
on non-array objects
1,2,3
*/