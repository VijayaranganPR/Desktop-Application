/*
type3:
when a variable is declared with let, const, and class declarations 
(also collectively called lexical declarations) are hoisted with type 3 behavior.

let, and const are also declared as undefined but they are in a temporal dead zone

the interpreter declares those variable only while reaching the code line
if we call the variable before declartion will give ReferenceError.

we can't redeclare the variable anytime in the program. declaration need to be done only once  
*/

// can't use before assignment
console.log('can\'t use before assignment')

// console.log(a)           // temporal dead zone
// const a = 10;
// console.log(a)

/*
can't use before assignment
ReferenceError: Cannot access 'a' before initialization
*/



console.log()
// can't be redeclared
console.log('can\'t be redeclared')


// temporal dead zone
// let b = 10;
// let b = 20;
// console.log(b)

/*
can't be redeclared
SyntaxError: Identifier 'b' has already been declared
*/





// we can't access those variables because they are stored in script scope

let a = 10;
console.log(globalThis.a);  // undefined

const b = 20;
console.log(globalThis.b);  // undefined

var c = 30;
console.log(globalThis.c)   // 30 in browser --- undefined in node.js
