/* Non Premitive datatypes
1.	Object
*/
let o1 = {
    s : 10,
    a : 20,
    b : 30,
    sum : function(){
        return (this.a +this.b +this.s);
    }
}
console.log(typeof(o1)) // object
console.log(o1['a']);   // 20
console.log(o1['b']);   // 30
console.log(o1.s);      // 10
console.log(o1.sum());  // 60



console.log()
// creating using Object()
console.log(`creating using Object()`);
let o2 = Object()
o2.s = 1
o2.a = 2;
o2.b = 4;
o2.sum = function(){
    return (this.a + this.b + this.s);
}

console.log(typeof(o2)) // object
console.log(o2.a);      // 2
console.log(o2.b);      // 4
console.log(o2.s);      // 1
console.log(o2.sum());  // 7

/* 
creating using Object()
object
2
4
1
7
*/



console.log()
// creating using constructor()
console.log(`creating using constructor()`);

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.print = function(){
        console.log(`first name is ${this.firstName}`);
        console.log(`last name is ${this.lastName}`);
    }
}

vijay = new Person("Vijayarangan","Pandurengadurai Raju")
vijay.print()

/* 
creating using constructor()
first name is Vijayarangan
last name is Pandurengadurai Raju
 */



console.log(``);
// calling from user - use browser and html file
console.log(`calling from user`);

o = {firstName: 'Vijayarangan', lastName:'Pandurengadurai Raju'}
// userInput = ((prompt("You want firstName(f) or lastName(l)")).toLowerCase() === 'f')?'firstName':'lastName'

// console.log(o[userInput])