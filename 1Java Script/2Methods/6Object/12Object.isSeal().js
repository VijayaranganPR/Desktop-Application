/*
check wheather the object is sealed or not
*/

const o = {a:1, b:2}

console.log(Object.isSealed(o)); // false
Object.seal(o);
console.log(Object.isSealed(o)); // true