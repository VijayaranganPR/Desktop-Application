/**
 * Check wheather the property is enumerable or not
 */

o = {a:1}
Object.defineProperty(o,'c', {
    value : 3,
    enumerable: false, // can't be seen in console
    writable: false,
    configurable : false
})
console.log(o.propertyIsEnumerable('a')); // true
console.log(o.propertyIsEnumerable('c')); // false

