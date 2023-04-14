// variables can be declared in four types

// first - const
// can't be changed
// but in array and object value can be changed

// primitive
const a = 10;
// below code will give error
// a = 20;
console.log(a);

// Non-Primitive
// for object
const g = {a:1, b:2}
g.c = 3;
console.log(g) // { a: 1, b: 2, c: 3 }

// for array
const f = [1,2,3,4];
f[2] = 10;
console.log(f) // [ 1, 2, 10, 4 ]



console.log("")
// second - var
// it will be initialized to undefined before the program starts
// it will print it as undefined.
// and if the variable will be redeclared use var

console.log(b); // undefined
var b = 10;
var b = 20;
var b = 30;
console.log(b); // 30



console.log("")
// third - let
// this will give error
// can't redeclar the value but value can be changed.
// console.log(c);
let c = 10;
// let c = 20;
// let c = 30;
c = 30;
console.log(c);  // 30



console.log("")
// fourth - nothing
// just like let
// console.log(d);
// don't redeclare with let use var
d = 10;
// let d = 30;
console.log(d)   // 10
e = 30;
var e;
console.log(e);   // 30