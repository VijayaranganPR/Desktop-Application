/*
type2:
when a variable is declared with var declaration,
the interpreter declares those variable before the execution of the program with value as undefined

we can redeclare the variable anytime in the program. 
*/

// print variable before assining
console.log('print variable before assining')

console.log(a)
var a = 10;
console.log(a)
/*
print variable before assining
undefined
10
*/



console.log()
// redeclaring many times
console.log('redeclaring many times')

var a = 10;
console.log(a)
var a = 20;
console.log(a)
var a = 30;
console.log(a)
/*
redeclaring many times
10
20
30
*/


console.log()
// declaring var inside a function
console.log('declaring var inside a function')

// console.log(a1)   // ReferenceError: a1 is not defined
function fun(){
    var a1 = 10;
    console.log(a1)
}
fun()
// console.log(`${a1}`);   // ReferenceError: a1 is not defined

/*
declaring var inside a function
ReferenceError: a1 is not defined
*/