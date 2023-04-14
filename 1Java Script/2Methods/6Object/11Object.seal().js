/*
makes existing properties non-configurable
new properties cannot be added, existing properties cannot be removed
*/

const o = {a:1, b:2}

console.log(Object.getOwnPropertyDescriptors(o))
/*
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { value: 2, writable: true, enumerable: true, configurable: true }
}
*/
Object.seal(o)

console.log(Object.getOwnPropertyDescriptors(o))
/*
{
  a: { value: 1, writable: true, enumerable: true, configurable: false },
  b: { value: 2, writable: true, enumerable: true, configurable: false }
}
*/
o.a = 20 // can be changed
o.c = 3; // can not be added

delete o.b // can not be deleted

console.log(o)// { a: 20, b: 2 }
