/* 
for instance or non static - this will refer to the instance fields in object
for static - this will refer to the static fields in Class 

for derived class = they refer to derived class only
*/

class ClassA{
    instanceField = this
    instanceField2 = 2
    static staticField = this
    static staticField2 = 4
}

c = new ClassA()

console.log(c.instanceField)
console.log(ClassA.staticField);
console.log(c.instanceField === c);
console.log(ClassA.staticField === ClassA);

/*
<ref *1> ClassA {
  instanceField: [Circular *1],
  instanceField2: 2
}
<ref *1> [class ClassA] {
  staticField: [Circular *1],
  staticField2: 4
}
true
true
*/



console.log(``);
// Derived class
console.log(`Derived class`);

class ClassA1{
    constructor(a){
        this.a = this
    }
}

class ClassB1 extends ClassA1{
    constructor(b) {
        super(2)
        this.b = this
    }
}

c = new ClassB1(this)
console.log(c.a)
console.log(c.b)

/*
Derived class
<ref *1> ClassB1 { a: [Circular *1], b: [Circular *1] }
<ref *1> ClassB1 { a: [Circular *1], b: [Circular *1] }
*/