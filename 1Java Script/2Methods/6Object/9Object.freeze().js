/*
all properties will be non writable and non configurable
new properties can't be added
and their properties values and descriptors will not be changed
returns same object 
*/

const o = {a:1, b:2}
console.log(Object.getOwnPropertyDescriptors(o))
/*
{
    a: { value: 1, writable: true, enumerable: true, configurable: true },
    b: { value: 2, writable: true, enumerable: true, configurable: true }
}
*/

sameObject = Object.freeze(o);

console.log(Object.getOwnPropertyDescriptors(o))
/*
{
  a: { value: 1, writable: false, enumerable: true, configurable: false },
  b: { value: 2, writable: false, enumerable: true, configurable: false }
}
*/
o.a = 20; // value will not change
o.c = 30; // value will not added
console.log(o)
/*
{ a: 1, b: 2 }
*/