/*
variables declared with let or const can belong to an additional scope:

var and nothing can access outer scope others won't

they are used in for, while, if and more

Block scope: The scope created with a pair of curly braces (a block).
*/
var x = 10
{
    var x = 1;
}
console.log(x);  //1

let y = 10
{
    let y = 1;
}
console.log(y) // 10

const z = 10
{
    const z = 1;
}
console.log(z) // 10

a = 10
{
    a = 1;
}
console.log(a) //1


console.log(``);
// Call with different variable type
console.log(`Call with different variable type`);

var b = 10
{
    let b = 1;
}
console.log(b);  //10

const c = 10
{
    // c = 1;          // nothing can access outer scope, c can't be redeclare 
}
console.log(c) // 10

const d = 10
{
    // var d = 1;   // var can access outer scope, d can't be redeclare
} 
console.log(z) // 10

let e = 10
{
    e = 1;
}
console.log(e) //1


var f = 10
{
    const f = 1
}
console.log(f)  // 10


f = 10
{
    const f = 1
}
console.log(f)  // 10

const g = 10
{
    let g = 1;          
}
console.log(g) // 10