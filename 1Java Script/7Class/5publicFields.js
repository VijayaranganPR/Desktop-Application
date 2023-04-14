class ClassA{
    publicField1;
    publicField2 = 10
    constructor() {
        this.publicField1 = 1
        this.publicField3 = 100;
        this.publicMethod1 = function(){console.log(`publicField1 = ${this.publicField1}, publicField2 = ${this.publicField2}, publicField3 = ${this.publicField3}`)}
    }
    publicMethod2(){
        console.log(`publicField1 = ${this.publicField1}, publicField2 = ${this.publicField2}, publicField3 = ${this.publicField3}`)
    }
}
c = new ClassA()
console.log(c.publicField1) // 1
console.log(c.publicField2) // 10
console.log(c.publicField3) // 100

c.publicMethod1()           // publicField1 = 1, publicField2 = 10, publicField3 = 100
c.publicMethod2()           // publicField1 = 1, publicField2 = 10, publicField3 = 100

console.log(c)
/*
ClassA {
  publicField1: 1,
  publicField2: 10,
  publicField3: 100,
  publicMethod1: [Function (anonymous)]
}
*/
console.log(ClassA)
// [class ClassA]

// publicMethod2 is stored in prototype as non enumerable but we can't see use crome developer tools
console.log(Object.getPrototypeOf(ClassA))
// {}



console.log(``);
// in child class
console.log(`in child class`);

class ClassB extends ClassA{
    publicField3;
    publicField4 = 10
    constructor() {
        super()
        this.publicField3 = 1
        this.publicField5 = 100;
        this.publicMethod1 = function(){console.log(`publicField1 = ${this.publicField1}, publicField2 = ${this.publicField2}, publicField3 = ${this.publicField3}, publicField4 = ${this.publicField4}, publicField5 = ${this.publicField5}`)}
    }
    publicMethod2(){
        console.log(`publicField1 = ${this.publicField1}, publicField2 = ${this.publicField2}, publicField3 = ${this.publicField3}, publicField4 = ${this.publicField4}, publicField5 = ${this.publicField5}`)
    }
}
c = new ClassB()
console.log(c.publicField1) // 1
console.log(c.publicField2) // 10
console.log(c.publicField3) // 1        // overridded 
console.log(c.publicField4) // 10
console.log(c.publicField5) // 100


// both methods are overridded
c.publicMethod1()   // publicField1 = 1, publicField2 = 10, publicField3 = 1, publicField4 = 10, publicField5 = 100
c.publicMethod2()   // publicField1 = 1, publicField2 = 10, publicField3 = 1, publicField4 = 10, publicField5 = 100

console.log(c)
/*
ClassB {
  publicField1: 1,
  publicField2: 10,
  publicField3: 1,
  publicMethod1: [Function (anonymous)],
  publicField4: 10,
  publicField5: 100
}
*/

// publicMethod2 is stored in prototype as non enumerable but we can't see use crome developer tools
console.log(Object.getPrototypeOf(ClassB))
// [class ClassA]
console.log(Object.getPrototypeOf(Object.getPrototypeOf(ClassB)))
// {}
