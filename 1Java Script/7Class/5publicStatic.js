class ClassA{
    static publicStaticField1;
    static publicStaticField2 = 10
    constructor() {
        ClassA.publicStaticField1 = 1
        ClassA.publicStaticField3 = 100;
        ClassA.publicStaticMethod1 = function(){console.log(`publicStaticField1 = ${this.publicStaticField1}, publicStaticField2 = ${this.publicStaticField2}, publicStaticField3 = ${this.publicStaticField3}`)}
    }
    static publicStaticMethod2(){
        console.log(`publicStaticField1 = ${this.publicStaticField1}, publicStaticField2 = ${this.publicStaticField2}, publicStaticField3 = ${this.publicStaticField3}`)
    }
}

c = new ClassA()
console.log(ClassA.publicStaticField1) // 1
console.log(ClassA.publicStaticField2) // 10
console.log(ClassA.publicStaticField3) // 100

ClassA.publicStaticMethod1()           // publicStaticField1 = 1, publicStaticField2 = 10, publicStaticField3 = 100
ClassA.publicStaticMethod2()           // publicStaticField1 = 1, publicStaticField2 = 10, publicStaticField3 = 100

console.log(c)
// ClassA {}

console.log(ClassA)
/*
[class ClassA] {
  publicStaticField1: 1,
  publicStaticField2: 10,
  publicStaticField3: 100,
  publicMethod1: [Function (anonymous)]
}
*/

// publicStaticMethod2 is stored in class scope as non Enumerable so we can't see, use crome developer tools
console.log(Object.getPrototypeOf(ClassA))
// {}



console.log(``);
// in child class
console.log(`in child class`);

class ClassB extends ClassA{
    static publicStaticField3;
    static publicStaticField4 = 10
    constructor() {
        super()
        ClassA.newpara = 'also declear in other class'
        ClassB.publicStaticField3 = 1
        ClassB.publicStaticField5 = 100;
        ClassB.publicStaticMethod1 = function(){console.log(`publicStaticField1 = ${this.publicStaticField1}, publicStaticField2 = ${this.publicStaticField2}, publicStaticField3 = ${this.publicStaticField3}, publicStaticField4 = ${this.publicStaticField4}, publicStaticField5 = ${this.publicStaticField5}`)}
    }
    static publicStaticMethod2(){
        console.log(`publicStaticField1 = ${this.publicStaticField1}, publicStaticField2 = ${this.publicStaticField2}, publicStaticField3 = ${this.publicStaticField3}, publicStaticField4 = ${this.publicStaticField4}, publicStaticField5 = ${this.publicStaticField5}`)
    }
}

c = new ClassB()
console.log(ClassB.publicStaticField1) // 1
console.log(ClassB.publicStaticField2) // 10
console.log(ClassB.publicStaticField3) // 1        // overridded 
console.log(ClassB.publicStaticField4) // 10
console.log(ClassB.publicStaticField5) // 100
console.log(ClassA.newpara) // also declear in other class
ClassB.publicStaticMethod1()           // publicStaticField1 = 1, publicStaticField2 = 10, publicStaticField3 = 1, publicStaticField4 = 10, publicStaticField5 = 100
ClassB.publicStaticMethod2()           // publicStaticField1 = 1, publicStaticField2 = 10, publicStaticField3 = 1, publicStaticField4 = 10, publicStaticField5 = 100

console.log(c)
// ClassB {}

console.log(ClassB)
/*
[class ClassB extends ClassA] {
  publicStaticField3: 1,
  publicStaticField4: 10,
  publicStaticField5: 100,
  publicStaticMethod1: [Function (anonymous)]
}
*/

// publicMethod2 is stored in class scope as non Enumerable so we can't see, use crome developer tools
console.log(Object.getPrototypeOf(ClassB))
/*
[class ClassA] {
  publicStaticField1: 1,
  publicStaticField2: 10,
  publicStaticField3: 100,
  publicStaticMethod1: [Function (anonymous)]
}
*/
console.log(Object.getPrototypeOf(Object.getPrototypeOf(ClassB)))
// {}