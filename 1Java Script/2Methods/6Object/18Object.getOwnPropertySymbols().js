/**
 *  returns an array of all symbol properties in the object
 */

let o = {a:1,b:2}
Object.defineProperty(o,'c',{
    value : 3,
    enumerable: false, 
    writable: false,
    configurable : false
})

let d = Symbol("description")
let e = Symbol('value')
o[d] = "question";
o[e] = 'answer';
console.log(Object.getOwnPropertySymbols(o)) // [ Symbol(description), Symbol(value) ]
