var o = {a:1}
let i = Object.create(o);
i.b = 2;
var j = Object.create(i);
console.log(j.toString());
console.log(Object.getPrototypeOf(j));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(j)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(j))));
console.log(o.isPrototypeOf(i))