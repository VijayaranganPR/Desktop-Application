/*
Logical Operators

&& - logical and
|| - logical or
! - logical not
*/

let a = true;
let b = false;

// && - logical and
console.log(`${a} && ${b} is ${a&&b}`)

// || - logical or
console.log(`${a} || ${b} is ${a||b}`)

// ! - logical not
console.log(`! of ${a} is ${!a}`)

// If the first object is truthy, the logical AND operator returns the second operand:
console.log(true && "dog") // dog

// If the first object is truthy, the logical OR operator returns the First operand:
console.log('dog' || false) // dog