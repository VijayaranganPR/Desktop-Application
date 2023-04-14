/**
 * retuns boolean values based on wheather the property is objects own property or not.
 * inherited properties won't show
 */
o = {a:1, b: 2}
Object.defineProperty(o, 'c',   {
    value : 3,
    enumerable: false, // can't be seen in console
    writable: false,
    configurable : false
})
console.log(o) // { a: 1, b: 2 }
console.log(Object.getOwnPropertyDescriptors(o)) 
/*
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { value: 2, writable: true, enumerable: true, configurable: true },
  c: { value: 3, writable: false, enumerable: false, configurable: false }
}
*/
console.log(Object.hasOwn(o, 'c')); // true

o1 = Object.create(o);
console.log(Object.getOwnPropertyDescriptors(o1)) // {}
console.log(Object.hasOwn(o1, 'c')); // false
