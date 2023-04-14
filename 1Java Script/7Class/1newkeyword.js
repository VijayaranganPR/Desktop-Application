// new keyword creates a empty object and assign properties to them
// class constructors are only called with new keyword
// in function we can find wheather it is called with new or without new using new.target

class ClassA{
    constructor(a) {
        this.a = a
    }   
}

// c = ClassA('a1')
// TypeError: Class constructor ClassA cannot be invoked without 'new'
console.log(new ClassA('sometext'))
c = new ClassA('a1')  // ClassA { a: 'sometext' }
console.log(c) // ClassA { a: 'a1' }
console.log(c.a) // a1



console.log(``);
// in function constructor
console.log(`in function constructor`);

function constructor1(){
    if (new.target){
        this.a = 'using new';
    }
    else{
        this.a = 'not using new'
    }
}

withoutnew = constructor1()
console.log(withoutnew)  // undefined
console.log(a) // a defined in global - not using new
// console.log(withoutnew.a) // error

withnew = new constructor1()
console.log(withnew)  // constructor1 { a: 'using new' }
console.log(a) // not using new
console.log(withnew.a) // using new
