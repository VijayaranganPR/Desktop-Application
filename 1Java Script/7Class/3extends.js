/*
The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
*/

// simple extend
console.log('simple extend')

class ClassA{
    constructor(a) {
        console.log('ClassA is constructor executed')
        this.a = a;
        console.log('ClassA is constructor end')

    }
    fun(){
        console.log(`a = ${this.a}, b = ${this.b}, c = ${this.c}`);
    }
}
class ClassB extends ClassA{
    constructor(b) {
        super('a1')
        console.log('ClassB is constructor executed')
        this.b = b;
        console.log('ClassB is constructor end')
    }
}
class ClassC extends ClassB{
    constructor(c) {
        super('b1')
        console.log('ClassC is constructor executed')
        this.c = c
        console.log('ClassC is constructor end')
    }
}

o = new ClassC('c1');
o.fun()
/*
ClassA is constructor executed
ClassA is constructor end
ClassB is constructor executed
ClassB is constructor end
ClassC is constructor executed
ClassC is constructor end
a = a1, b = b1, c = c1
*/



console.log(``);
// using prototype to extend constructor properties - traditional way
console.log(`using prototype`);
function constructor1(a){
    this.a = a;
}

constructor1.prototype.fun = function(){
    console.log(`a = ${this.a}, b = ${this.b}`);
}

class ClassB1 extends constructor1{
    constructor(b) {
        super('a2')
        this.b = b;
    }
}

o = new ClassB1('b2')
o.fun()   // a = a2, b = b2
console.log(Object.getPrototypeOf(o))  // constructor1 {}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(o))) // { fun: [Function (anonymous)] }
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(o)))) //[Object: null prototype] {}


console.log(``);
// prototype of child class must need to a object or null
class ParentClass {
    constructor(){
      return 1
    }
  }
  
  class ChildClass extends ParentClass{
    constructor(){
      super()
      // return 1          // error
    }
  }
  
  c = new ChildClass()
  // Derived constructors may only return object or undefined



console.log(``);
// extend will set prototype for both childClass and clildClass.prototype
console.log(`set prototype for both childClass and clildClass.prototype`);

class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
console.log(Object.getPrototypeOf(ChildClass) === ParentClass);  // true
// Allows inheritance of instance properties
console.log(Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype);  // true