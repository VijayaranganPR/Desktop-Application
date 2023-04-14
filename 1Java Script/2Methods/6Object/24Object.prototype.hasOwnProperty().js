/**
 * same as Object.hasOwn() but it not static
 */
o = {a:1, b: 2}
Object.defineProperty(o, 'c',   {
    value : 3,
    enumerable: false, // can't be seen in console
    writable: false,
    configurable : false
})
console.log(o.hasOwnProperty('c')); // true

o1 = Object.create(o);
console.log(o1.hasOwnProperty('c')); // false
