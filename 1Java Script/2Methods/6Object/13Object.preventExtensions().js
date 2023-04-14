/*
New properties can't be added the object.
existing property can be deleted
*/

const o = {a:1, b:2}

Object.preventExtensions(o);

o.c = 10; // won't be added
console.log(o) // { a: 1, b: 2 }

delete o.b 
console.log(o) // { a: 1 }