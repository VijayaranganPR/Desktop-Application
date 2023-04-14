// ...

// in array
console.log(`in array`);

a = [4,5,6]
console.log([1,2,3,...a,7,8,9])
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/



console.log(``);
// copy array
console.log(`copy array`);

a = [1,2,3]
b = a
a[0] = 10
console.log(a,b)  // [ 10, 2, 3 ] [ 10, 2, 3 ]

a = [1,2,3]
b = [...a]
a[0] = 10
console.log(a,b)  // [ 10, 2, 3 ] [ 1, 2, 3 ]



console.log(``);
// alternative for assign
console.log(`alternative for assign`);

a = {a:1, b:2}
b = {b:3, c:4}
c = Object.assign(a,b)
console.log(a,b,c)  // { a: 1, b: 3, c: 4 } { b: 3, c: 4 } { a: 1, b: 3, c: 4 }

a = {a:1, b:2}
b = {b:3, c:4}
c = {...a,...b}
console.log(a,b,c)  // { a: 1, b: 2 } { b: 3, c: 4 } { a: 1, b: 3, c: 4 }

