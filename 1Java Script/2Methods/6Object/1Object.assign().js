/*
to copy and override enumerable own properties from one object to other
event he object is const the value will change
returned instance will be equal to target instance of the object
*/

// Simple example
console.log('Simple example')

const target = {a:1, b: 2}
const source1 = {b:3, c: 4}
const source2 = {c:5, d: 6}

const returnedtarget = Object.assign(target, source1, source2);
console.log(returnedtarget === target);
console.log(returnedtarget);
console.log(target);
console.log(source1);
console.log(source2);
/*
true
{ a: 1, b: 3, c: 5, d: 6 }
{ a: 1, b: 3, c: 5, d: 6 }
{ b: 3, c: 4 }
{ c: 5, d: 6 }
*/
console.log(Object.getPrototypeOf(target)) // [Object: null prototype] {}
console.log(Object.getOwnPropertyDescriptors(target)) 
/*
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { value: 3, writable: true, enumerable: true, configurable: true },
  c: { value: 5, writable: true, enumerable: true, configurable: true },
  d: { value: 6, writable: true, enumerable: true, configurable: true }
}
*/





console.log()
// copy of object
// to make a copy of a object 
// but those two object are not same
console.log('copy of object')

const source3 = {b:3, c: 4}
const copyof = Object.assign({},source3);
console.log(source3 === copyof);
console.log(copyof);
console.log(source3);
/*
false
{ b: 3, c: 4 }
{ b: 3, c: 4 }
*/


console.log()
// Warning for Deep Clone
console.log('Warning for Deep Clone')

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }



console.log()
// Primitives will be wrapped to objects
console.log('Primitives will be wrapped to objects')

const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }



