/*
to create object properties from a array
*/
let arr = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ];
o = Object.fromEntries(arr);
console.log(o) // { a: 1, b: 2, c: 3 }
