/*
used to inherit properties from other method

Syntax
Object.create(proto, propertiesObject)

TypeError
Thrown if proto is neither null nor an Object.
*/

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

console.log(Object.getPrototypeOf(me)) // { isHuman: false, printIntroduction: [Function: printIntroduction] }
console.log(Object.getOwnPropertyDescriptors(me))  // {}



me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction = function(){
    console.log(`name = ${me.name}, Human = ${me.isHuman}`)
}// method can be overwritten
me.printIntroduction();
person.printIntroduction();




// a will be overridded and become {}
a = {b:1}
b = {a:3}
a = Object.create(b)
console.log(a,b) // {} { a: 3 } // b missing
console.log(Object.getPrototypeOf(a)) // { a: 3 }
