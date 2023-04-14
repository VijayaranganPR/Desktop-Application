/*
type1:
we can call a function which is declared as Function Declaration anywhere in that program.
because the interpreter declares those function before the execution of the program

if it is declared as arrow function or Function Expression 
with let and const:  type 3 will be implemented
with var: type 2 will be executed

*/



console.log()
// executing type 1
console.log('executing type 1')

type1()
function type1(){
    console.log("Type1 function executed")
}
/*
Type1 function executed
*/



console.log(``);
// function executes first
console.log(`function executes first`);

// console.log(hi) // can't be accessed before declaration
let hi = 2;
console.log(hi);
(function(){
    let hi = 1;
    console.log(hi)
})()
console.log(hi);
/*
function executes first
2
1
2
*/



console.log()
// with var and const and let
console.log('with var and const and let')

/*
TypeError: fun1 is not a function
fun1()
var fun1 = function(){console.log('fun1 is executed')} 
*/

/*
ReferenceError: Cannot access 'fun2' before initialization
fun2()
let fun2 = ()=>  console.log('fun2 is executed')
/*

/*
ReferenceError: Cannot access 'fun3' before initialization
fun3()
const fun3 = function(){console.log('fun3 is executed')} 
*/


