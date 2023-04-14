/*
The constructor method is a special method of a class for creating and initializing an object instance of that class.

A constructor enables you to provide any custom initialization that must be done 
before any other methods can be called on an instantiated object.
*/


// simple example
console.log('simple example')

class ClassA{
    constructor(length, width) {
        this.length = length
        this.width = width
        console.log(`ClassA constructor executed`);
    }

    area() {
        return this.length*this.width
    }
}

c = new ClassA(10,5)
console.log(`${c.area()}`);
/*
ClassA constructor executed
50
*/



console.log()
// inheritance constructor changes
console.log(`inheritance constructor changes`);

class Thing{
    constructor(species, language) {
        this.species = species;
        this.language = language
        console.log('******************Human class executed******************')
        console.log('this inside Human constructor is:')
        console.log(this)
        console.log('******************Human class contructor end******************')

    }
    speak(){
        console.log(`speaks in ${this.language}`);
        console.log('this inside speak() is:')
        console.log(this)
    }
}

class Indian extends Thing{
    constructor(language){
        console.log('******************Indian class executed******************')
        super('Human', language)     // must need to call super constructor
        this.motherTongue = language;
        console.log('this inside Indian constructor() is:')
        console.log(this)
        console.log('******************Indian class contructor end******************')

    }
}

i = new Indian('Tamil')
console.log(`Species is ${i.species}`);
console.log(`Mother tongue is ${i.motherTongue}`)
i.speak()
console.log('value of i is:')
console.log(i) // Indian { species: 'Human', language: 'Tamil', motherTongue: 'Tamil' }
console.log(Object.getPrototypeOf(i)); // Thing {}

/*
inheritance constructor changes
******************Indian class executed******************
******************Human class executed******************
this inside Human constructor is:
Indian { species: 'Human', language: 'Tamil' }
******************Human class contructor end******************
this inside Indian constructor() is:
Indian { species: 'Human', language: 'Tamil', motherTongue: 'Tamil' }
******************Indian class contructor end******************
Species is Human
Mother tongue is Tamil
speaks in Tamil
this inside speak() is:
Indian { species: 'Human', language: 'Tamil', motherTongue: 'Tamil' }
value of i is:
Indian { species: 'Human', language: 'Tamil', motherTongue: 'Tamil' }
Thing {}
*/



console.log(``);
// defining constructor using function
console.log(`defining constructor using function`);

function constructor1(a,b){
    this.a = a
    this.b = b
}

c = new constructor1(1,2)

console.log(c)



console.log(``);
// return type in constructor
console.log(`return type in constructor`);

class Class1{
    constructor() {
        return 1
    }
}

c1 = new Class1()
console.log(c1)         // Class1 {}

class Class2 extends Class1{
    constructor() {
        super()
        return 1        // child class only return null or undefined
    }
}
// c2 = new Class2()       // error
// console.log(c2)         