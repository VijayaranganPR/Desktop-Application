/* 
This keyword is to access the same property of an object when it's called somewhere(function, class, global)
In non–strict mode, this is always a reference to an object. 
In strict mode, it can be any value. 

for methods = this is obj
for functions = this is globalThis

// when ever there is a normal function call means it will point globalThis
*/

// In function declaration
console.log('In function declaration')
console.log()



function topFun1(){
    // console.log('function print')
    return this
}

// function that returns this in global
console.log(`function that returns this in global`);

console.log(topFun1()); 
// ************prints all the global properties**************
console.log(topFun1() === globalThis) // true



console.log()
// calling the function with object - returns the object itself
// this can access only the current object which is used to call
console.log(`calling the function with object`);

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.objectCall = topFun1;
obj2.objectCall = topFun1;

console.log(obj1.objectCall())
console.log(obj2.objectCall())
/* 
calling the function with object
{ name: 'obj1', objectCall: [Function: topFun1] }
{ name: 'obj2', objectCall: [Function: topFun1] }
 */



console.log()
// calling the function from prototype of the object - returns the current object 
// this can access only the current object which is used to call
console.log(`calling the function from prototype of the object`);

obj3 = {__proto__: obj1,name : "obj3"}
console.log(obj3.objectCall())
/*
calling the function from prototype of the object
{ name: 'obj3' }
*/



console.log(``);
// function declaration call inside a method
console.log(`function declaration call inside a method`);

obj = {a:1, b:2, outsideFunction(){
    function insideFunction(){
        console.log('insideFunction:')
        console.log(this)
    }
    insideFunction()
    console.log('outsideFunction:')
    console.log(this)
}}
obj.outsideFunction()
/*
function declaration call inside a method
insideFunction:
************prints all the global properties**************
outsideFunction:
{ a: 1, b: 2, outsideFunction: [Function: outsideFunction] }
*/



console.log(``);
// on premitive 
console.log('on premitive')

Number.prototype.objectCall = topFun1
console.log(typeof(1).objectCall())
/*
on premitive
object
*/
