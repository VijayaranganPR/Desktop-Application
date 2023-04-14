/*
The Array.isArray() static method determines whether the passed value is an Array.
*/
// all following calls return true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a", "b", "c", "d")));
console.log(Array.isArray(new Array(3)));
// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype));

// all following calls return false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));