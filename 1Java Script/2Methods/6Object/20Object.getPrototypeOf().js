const o = {a:1, b:2}
const a = Object.create(o)
console.log(Object.getPrototypeOf(o)); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(a)); // { a: 1, b: 2 }