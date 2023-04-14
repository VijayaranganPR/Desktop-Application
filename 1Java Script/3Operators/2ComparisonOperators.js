/*
Before that the below are false 
null
undefined
NaN
0
''

Comparision Operators in JS are 
<
>
<=
>=
==
===
!=
!==
*/

let a = 10;
let b = 20;

// <
console.log(`< comparision for ${a} and ${b} is ${a<b}`)

// >
console.log(`> comparision for ${a} and ${b} is ${a>b}`)

// <=
console.log(`<= comparision for ${a} and ${b} is ${a<=b}`)

// >=
console.log(`>= comparision for ${a} and ${b} is ${a>=b}`)

a = 1;
b = "1"

// ==
// one check value without type
console.log(`== comparision for ${a} and String ${b} is ${a==b}`)

// ===
// check value with type
console.log(`=== comparision for ${a} and String ${b} is ${a===b}`)

// !=
// one check value without type
console.log(`!= comparision for ${a} and String ${b} is ${a!=b}`)

// !==
// check value with type
console.log(`!== comparision for ${a} and String ${b} is ${a!==b}`)
