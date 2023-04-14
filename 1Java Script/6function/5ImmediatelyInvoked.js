/* 
An IIFE (Immediately Invoked Function Expression) 
it is a JavaScript function that runs as soon as it is defined. 

usecase:
to not include temp variables in global.

use ; to separate IIFE.
*/
(function hi(a,b){
    var c = 30
    console.log('Immediately Invoked Function Expression')
    console.log(`value of a is ${a}, b is ${b}, and c is ${c}`);
})(10,20);

// console.log(c) // ReferenceError: c is not defined

/*
Immediately Invoked Function Expression
value of a is 10, b is 20, and c is 30
*/



console.log(``);
// use ; to use two IIFE
// anonamous function
console.log(`two IIFE`);
(function (){
    console.log('function executed')
})();

/*
two IIFE
function executed
*/



console.log(``);
// arrow function
console.log(`arrow function`);
a = (()=>{
    console.log('hi')
    return 'a'
})()
console.log(a)

/*
arrow function
hi
a
*/



console.log(``);
// you can use unary operators
console.log(`unary operators`);

console.log(+function (){return 1}())       // 1

console.log(-function (){return 1}())       // -1

console.log(~function (){return 1}())       // -2

console.log(!function (){return 1}())       // false

console.log(void function (){return 1}())   // undefined
