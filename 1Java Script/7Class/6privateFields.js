class ClassA{
    #privateField1;
    #privateField2 = 10
    constructor() {
        this.#privateField1 = 1
        this.returnedFromPrivateMethod2 = this.#privateMethod2()
        // private must need to be declared only in class scope

        // this.#privateField3 = 100; 
        // this.#privateMethod1 = function(){console.log(`#privateField1 = ${this.#privateField1}, #privateField2 = ${this.#privateField2}, #privateField3 = ${this.#privateField3}`)}
    }
    #privateMethod2(){
        return `#privateField1 = ${this.#privateField1}, #privateField2 = ${this.#privateField2}`
    }
}
c = new ClassA()
console.log(c.privateField1) // undefined
console.log(c.privateField2) // undefined
console.log(c.privateField3) // undefined

// c.privateMethod1()          
// c.privateMethod2()           
console.log(c.returnedFromPrivateMethod2)       // #privateField1 = 1, #privateField2 = 10

console.log(c)
/*
ClassA {
  returnedFromPrivateMethod2: '#privateField1 = 1, #privateField2 = 10'
}
*/

// all private methods and variables are stored in local class execution scope
console.log(Object.getPrototypeOf(ClassA))
// {}


console.log(``);
// in child class
console.log(`in child class`);

class ClassB extends ClassA{
    #privateField3;
    #privateField4 = 10
    constructor() {
        super()
        this.#privateField3 = 1
        this.returnedFromPrivateMethod2 = this.#privateMethod2()

        // private must need to be declared only in class scope
        
        // this.#privateField5 = 100;
        // this.#privateMethod1 = function(){console.log(`#privateField1 = ${this.#privateField1}, #privateField2 = ${this.#privateField2}, #privateField3 = ${this.#privateField3}, #privateField4 = ${this.#privateField4}, #privateField5 = ${this.#privateField5}`)}
    }
    #privateMethod2(){
        return `#privateField3 = ${this.#privateField3}, #privateField4 = ${this.#privateField4}`
    }
}
c = new ClassB()
console.log(c.privateField1) // undefined
console.log(c.privateField2) // undefined
console.log(c.privateField3) // undefined        
console.log(c.privateField4) // undefined
console.log(c.privateField5) // undefined


// gives error
// c.privateMethod1()   
// c.privateMethod2()   
console.log(c.returnedFromPrivateMethod2)       // #privateField3 = 1, #privateField4 = 10\


console.log(c)
/*
ClassB {
  returnedFromPrivateMethod2: '#privateField3 = 1, #privateField4 = 10'
}
*/
// all private methods and variables are stored in local class execution scope
console.log(Object.getPrototypeOf(ClassB))
//[class ClassA]
console.log(Object.getPrototypeOf(Object.getPrototypeOf(ClassB)))
// {}