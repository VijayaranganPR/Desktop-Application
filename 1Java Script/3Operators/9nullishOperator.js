/*
The nullish coalescing (??) operator is a logical operator 
that returns its right-hand side operand when its left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand.
*/

let a = "left"??"right";
console.log(`the value assigned for a is ${a}`);

a = null??"right";
console.log(`the value assigned for a is ${a}`);

a = undefined??"right";
console.log(`the value assigned for a is ${a}`);

a = ""??"right";
console.log(`the value assigned for a is ${a}`);

a = 0??"right";
console.log(`the value assigned for a is ${a}`);

a = NaN??"right";
console.log(`the value assigned for a is ${a}`);

a = []??"right";
console.log(`the value assigned for a is ${a}`);
/*
the value assigned for a is left
the value assigned for a is right
the value assigned for a is right
the value assigned for a is
the value assigned for a is 0
the value assigned for a is NaN
the value assigned for a is
*/