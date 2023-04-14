/*
Call, apply, and bind are the functions that help you change the context of the 'this' keyword present inside the invoking function.

calling a fucntion with another or same object values using this keyword

call:
call the function and pass arguments.

apply:
call the function and pass arguments in array

bind:
returns the reference to the function with parameters send.
*/
// inside a object
console.log(`inside a object`);
a = {
    a:1,
    b:2,
fun1(c,d){
    console.log(`a = ${this.a}, b = ${this.b}, c = ${c}, d = ${d}`);
}}

// call 
console.log('call')
returned = a.fun1.call(this, 3,4) 
console.log(returned)
/*
call
a = undefined, b = undefined, c = 3, d = 4
undefined
*/

// apply
console.log('apply')
returned = a.fun1.apply(this, [3,4])
console.log(returned)
/*
apply
a = undefined, b = undefined, c = 3, d = 4
undefined
*/

// bind 
console.log('bind')
returned = a.fun1.bind(this, 3,4)
console.log(returned)
returned()
/*
bind
[Function: bound fun1]
a = undefined, b = undefined, c = 3, d = 4
*/


console.log(``);
// open function
console.log(`open function`);
function fun2(c,d){
    console.log(`a = ${this.a}, b = ${this.b}, c = ${c}, d = ${d}`);
}

a = {a:1,b:2}

// call
console.log(`call`);

returned = fun2.call(a, 3, 4)
/*
call
a = 1, b = 2, c = 3, d = 4
*/

// apply
console.log(`apply`);

returned = fun2.apply(a,[3,4])
/*
apply
a = 1, b = 2, c = 3, d = 4
*/

// bind
console.log(`bind`);

returned = fun2.bind(a, 3, 4)
returned()
/*
bind
a = 1, b = 2, c = 3, d = 4
*/




console.log(``);
// inbuild
console.log(`inbuild`);

arr = [1,2,3]

// call
console.log(`call`);

returned = Array.prototype.push.call(arr, 4, 5)
console.log(arr,returned)
/*
call
[ 1, 2, 3, 3, 4 ] 5
*/

// apply
console.log(`apply`);

returned = arr.push.apply(arr,[6, 7])
console.log(arr,returned)
/*
apply
[
  1, 2, 3, 4,
  5, 6, 7
] 7
*/

// bind - won't work
console.log(`bind`);
console.log(arr)

returned = arr.push.bind(arr, 8, 9)
console.log(arr)        // [ 1, 2, 3 ]
returned([10, 11])      // [ 1, 2, 3 ]
console.log(arr)        // [ 1, 2, 3, 8, 9, [ 10, 11 ] ]




console.log(``);
// in class -- only run in node.js
console.log(`in class`);

function ClassA(a,b){
    this.a = a
    this.b = b
    console.log(`a = ${this.a}, b = ${this.b}`);
}

// call
returned = ClassA.call(this,1,2)
console.log(returned);
/*
a = 1, b = 2
undefined
*/

// apply
returned = ClassA.apply(this,[3,4])
console.log(returned);
/*
a = 3, b = 4
undefined
*/

// bind - more useful
returned = ClassA.bind(this,5,6)
returned()
/*
a = 5, b = 6
*/