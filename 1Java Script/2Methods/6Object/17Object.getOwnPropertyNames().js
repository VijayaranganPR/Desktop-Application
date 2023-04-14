/*
returns all the own property names of the object except symbols
 */


o = {a:1,b:2}
Object.defineProperty(o,'c',{
    value : 3,
    enumerable: false, 
    writable: false,
    configurable : false
})

d = Symbol("description")
o[d] = 4;

console.log(Object.getOwnPropertyNames(o)) // [ 'a', 'b', 'c' ]