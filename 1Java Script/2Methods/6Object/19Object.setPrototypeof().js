/**
 * 
 */
a = {a:1, b:2}
o = {}
Object.setPrototypeOf(o,a)
console.log(Object.getPrototypeOf(o)) // { a: 1, b: 2 }