/*Premitive datatypes
1.	Null
2.	Undefined
3.	Boolean
4.	Number
5.	BigInt
6.	String
7.	Symbol
*/

/* before this understand typeof()
use typeof() to find the datatype of the variable
*/
console.log(`the use of typeof() for a number is ${typeof(10)}`);
console.log("")


// null
let n = null;
console.log(n);  // null
console.log(typeof(n))  // object



console.log("")
// undefined
let d;
console.log(d);    // undefined
console.log(typeof(d))  // undefined



console.log("")
// boolean
let t = true;
let f = false;
console.log(t, f);  // true false
console.log(typeof(t),typeof(f))    // boolean boolean



console.log("")
// number
let num = 10;
console.log(num);   // 10
console.log(typeof(num))    // number



console.log("")
// bigInt
let bi = 1111111111111111111100000000000000n;   
console.log(bi);    // 1111111111111111111100000000000000n
console.log(typeof(bi))     // bigint



console.log("")
// String
let str = "Vijayarangan P R"
console.log(str);   // Vijayarangan P R
console.log(typeof(str))  // string



console.log("")
// Symbols
let s = Symbol("sym");
console.log(s);     // Symbol(sym)
console.log(typeof(s))  // symbol

