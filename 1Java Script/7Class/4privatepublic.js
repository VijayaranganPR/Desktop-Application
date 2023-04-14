class ClassA{

    publicField = 'publicField';
    static publicStaticField = 'publicStaticField';

    #privateField = 'privateField';
    static #privateStaticField = 'privateStaticField';

    publicMethod(){
        return('publicMethod')
    }

    static publicStaticMethod(){
        return('publicStaticMethod')
    }

    #privateMethod(){
        return('privateMethod')
    }

    static #privateStaticMethod(){
        return('privateStaticMethod')
    }
    printall(){
        console.log(`
        publicField: ${this.publicField}\n
        publicStaticField: ${ClassA.publicStaticField}\n
        privateField: ${this.#privateField}\n
        privateStaticField: ${ClassA.#privateStaticField}\n
        publicMethod(): ${this.publicMethod()}\n
        publicStaticMethod: ${ClassA.publicStaticMethod()}\n
        privateMethod: ${this.#privateMethod()}\n
        privateStaticMethod: ${ClassA.#privateStaticMethod()}`)
    }
}

ca = new ClassA()

console.log(ca.publicField)    // publicField
console.log(ClassA.publicStaticField)    // publicStaticField

console.log()

console.log(ca.privateField)   // undefined
console.log(ClassA.privateStaticField)    // undefined

console.log()

console.log(ca.publicMethod())   // publicMethod
console.log(ClassA.publicStaticMethod())    //publicStaticMethod

console.log()

// ca.privateMethod()    // undefined method Error
// ClassA.privateStaticMethod()    // undefined method Error


ca.printall()
/*
        publicField: publicField

        publicStaticField: publicStaticField

        privateField: privateField

        privateStaticField: privateStaticField

        publicMethod(): publicMethod

        publicStaticMethod: publicStaticMethod

        privateMethod: privateMethod

        privateStaticMethod: privateStaticMethod
*/

console.log(``);
console.log(``);
console.log(``);
// after extend
console.log(`after extend`);


class ClassB extends ClassA{
    
}

cb = new ClassB()

console.log(cb.publicField)    // publicField
console.log(ClassB.publicStaticField)    // publicStaticField

console.log()

console.log(cb.privateField)   // undefined
console.log(ClassB.privateStaticField)    // undefined

console.log()

console.log(cb.publicMethod())   // publicMethod
console.log(ClassB.publicStaticMethod())    //publicStaticMethod

console.log()

// cb.privateMethod()    // undefined method Error
// ClassB.privateStaticMethod()    // undefined method Error

cb.printall()

/*
        publicField: publicField

        publicStaticField: publicStaticField

        privateField: privateField

        privateStaticField: privateStaticField

        publicMethod(): publicMethod

        publicStaticMethod: publicStaticMethod

        privateMethod: privateMethod

        privateStaticMethod: privateStaticMethod
*/



