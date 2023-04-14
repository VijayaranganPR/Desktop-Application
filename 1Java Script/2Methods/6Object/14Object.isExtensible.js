/*
check wheather new property can be added or not
*/

const o = {a:1, b:2}

console.log(Object.isExtensible(o)) // true
Object.preventExtensions(o);
console.log(Object.isExtensible(o)) // false
