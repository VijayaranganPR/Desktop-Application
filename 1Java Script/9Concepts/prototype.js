var first = {a:1}
let second = Object.create(first);
second.b = 2;
var third = Object.create(second);

console.log(third.toString());   // [object Object]
console.log(second.toString());   // [object Object]
console.log(first.toString());   // [object Object]

console.log(Object.getPrototypeOf(third)); // { b: 2 }
console.log(Object.getPrototypeOf(Object.getPrototypeOf(third))); // { a: 1 }
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(third)))); // [Object: null prototype] {}

console.log(second.isPrototypeOf(third)) // true
console.log(first.isPrototypeOf(second)) // true
console.log(first.isPrototypeOf(third)) // true


// prototype chaining
console.log(third.b) // 2
console.log(third.a) // 1



console.log(``);
// using constructor
// constructors are the function called with new
console.log("Using constructor")

const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
console.log(Person.prototype) // { greet: [Function: greet] }

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
console.log(reuben)
console.log(reuben.__proto__)
console.log(reuben.__proto__.__proto__)

/*
Using constructor
{ greet: [Function: greet] }
hello, my name is Reuben!
Person { name: 'Reuben' }
{ greet: [Function: greet] }
[Object: null prototype] {}
*/



console.log(``);
// prototype overriding
console.log(`prototype overriding`);

a = {a:1, b:2, fun(){console.log('something')}}
b = {h:3}
c = {a:4, c:5}
b.__proto__ = a
console.log(Object.getPrototypeOf(b))   // { a: 1, b: 2, fun: [Function: fun] }
console.log(b.a)                        // 1

b.__proto__ = c 
console.log(Object.getPrototypeOf(b))   // { a: 4, c: 5 }
console.log(b.b)                        // undefined



console.log(``);
// alternative
console.log(`alternative`);

a = {a:1,b:2,fun(){console.log('something')}}
b = {h:3}
c = {a:4,c:5}

b.__proto__ = {...a,...c}
console.log(Object.getPrototypeOf(b))   // { a: 4, b: 2, fun: [Function: fun], c: 5 }



console.log(``);
// another alternative
console.log(`another alternative`);

a = {a:1,b:2,fun(){console.log('something')}}
b = {h:3}
c = {a:4,c:5}

b.__proto__ = a
console.log(Object.getPrototypeOf(b))   // { a: 1, b: 2, fun: [Function: fun] }
console.log(b.a)                        // 1

b.__proto__ = {...Object.getPrototypeOf(b),...c}
console.log(Object.getPrototypeOf(b))   // { a: 4, b: 2, fun: [Function: fun], c: 5 }
console.log(b.a)                        // 1
