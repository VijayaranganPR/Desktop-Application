/* 
Classes are in fact "special functions", and 
just as you can define function expressions and function declarations, 
the class syntax has two components: class expressions and class declarations.

call objects can only be declared with new keyword

only difference is hoisting we can't call the class before initialization
 */

// class declaration
console.log(`class declaration`);

// c = new ClassA() // ReferenceError: Cannot access 'ClassA' before initialization

class ClassA{
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

c = new ClassA(10, 5)



console.log(``);
console.log('Class Expression')
/* A class expression is another way to define a class. Class expressions can be named or unnamed. 
The name given to a named class expression is local to the class's body. 
However, it can be accessed via the name property. */

console.log(``);
// Unnamed class Expression
console.log(`Unnamed class Expression`);

withoutName = class {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
c = new withoutName(5,10)
console.log(`${withoutName.name}`);

/*
Unnamed class Expression
withoutName
*/


console.log(``);
// Named class Expression
console.log(`Named class Expression`);

withName = class ClassName {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
c = new withName(5,10)
console.log(`${withName.name}`);

/*
Named class Expression
ClassName
*/

