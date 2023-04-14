class ClassA{
    static #privateStaticField1;
    static #privateStaticField2 = 10
    constructor() {
        ClassA.#privateStaticField1 = 1
        ClassA.returned = ClassA.#privateStaticMethod2()
        // can't declare private inside constructor
        // ClassA.#privateStaticField3 = 100;
        // ClassA.#privateStaticMethod1 = function(){console.log(`#privateStaticField1 = ${this.#privateStaticField1}, #privateStaticField2 = ${this.#privateStaticField2}, #privateStaticField3 = ${this.#privateStaticField3}`)}
    }
    static #privateStaticMethod2(){
        return (`#privateStaticField1 = ${this.#privateStaticField1}, #privateStaticField2 = ${this.#privateStaticField2}, #privateStaticField3 = SyntaxError`)
    }
}

c = new ClassA()
console.log(ClassA.privateStaticField1) // undefined
console.log(ClassA.privateStaticField2) // undefined
console.log(ClassA.privateStaticField3) // undefined


// can't call private methods outside class
// ClassA.privateStaticMethod1()           
// ClassA.privateStaticMethod2()           
console.log(ClassA.returned)    // #privateStaticField1 = 1, #privateStaticField2 = 10, #privateStaticField3 = SyntaxError

console.log(c)
// ClassA {}

console.log(ClassA)
/*
[class ClassA] {
  returned: '#privateStaticField1 = 1, #privateStaticField2 = 10, #privateStaticField3 = SyntaxError'
}
*/

// #privateMethod2 is stored in class scope as non Enumerable so we can't see, use crome developer tools
console.log(Object.getPrototypeOf(ClassA))
// {}



console.log(``);
// in child class
console.log(`in child class`);

class ClassB extends ClassA{
    static #privateStaticField3;
    static #privateStaticField4 = 10
    constructor() {
        super()
        ClassB.#privateStaticField3 = 1
        ClassB.returned = ClassB.#privateStaticMethod2()

        // can't declare private inside constructor
        // ClassB.#privateStaticField5 = 100;
        // ClassB.#privateStaticMethod1 = function(){console.log(`#privateStaticField1 = ${this.#privateStaticField1}, #privateStaticField2 = ${this.#privateStaticField2}, #privateStaticField3 = ${this.#privateStaticField3}, #privateStaticField4 = ${this.#privateStaticField4}, #privateStaticField5 = ${this.#privateStaticField5}`)}
    }
    static #privateStaticMethod2(){
        return (`#privateStaticField1 = SyntaxError, #privateStaticField2 = SyntaxError, #privateStaticField3 = ${this.#privateStaticField3}, #privateStaticField4 = ${this.#privateStaticField4}, #privateStaticField5 = SyntaxError`)
    }
}

c = new ClassB()
console.log(ClassB.privateStaticField1) // undefined
console.log(ClassB.privateStaticField2) // undefined
console.log(ClassB.privateStaticField3) // undefined        
console.log(ClassB.privateStaticField4) // undefined
console.log(ClassB.privateStaticField5) // undefined

// can't call private methods outside class
// ClassB.privateStaticMethod1()           
// ClassB.privateStaticMethod2()           
console.log(ClassB.returned)        // #privateStaticField1 = SyntaxError, #privateStaticField2 = SyntaxError, #privateStaticField3 = 1, #privateStaticField4 = 10, #privateStaticField5 = SyntaxError

console.log(c)
// ClassB {}

console.log(ClassB)
/*
[class ClassB extends ClassA] {
  returned: '#privateStaticField1 = SyntaxError, #privateStaticField2 = SyntaxError, #privateStaticField3 = 1, #privateStaticField4 = 10, #privateStaticField5 = SyntaxError'
}
*/

// #privateMethod2 is stored in class scope as non Enumerable so we can't see, use crome developer tools
console.log(Object.getPrototypeOf(ClassB))
/*
[class ClassA] {
  returned: '#privateStaticField1 = 1, #privateStaticField2 = 10, #privateStaticField3 = SyntaxError'
}
*/
console.log(Object.getPrototypeOf(Object.getPrototypeOf(ClassB)))
// {}