/*
The util.inherits(constructor, superConstructor) method is part of the Node.js util module. 
It is used to set up the prototype chain for an object-oriented inheritance pattern in JavaScript.

The constructor argument is the constructor function for the derived class, 
and the superConstructor argument is the constructor function for the base class.
*/

const util = require('util');

function BaseClass(name) {
  this.name = name;
}

BaseClass.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

function DerivedClass(name, title) {
  BaseClass.call(this, name);
  this.title = title;
}

util.inherits(DerivedClass, BaseClass);

DerivedClass.prototype.sayTitle = function() {
  console.log(`I am ${this.title}.`);
};

const obj = new DerivedClass('John', 'Mr');
obj.sayHello(); // Hello, my name is John.
obj.sayTitle(); // I am Mr.
