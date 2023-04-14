/**
 * returns a sting representing the object
 * this need to be overridden 
 */

// before overriden
o = {a:1, b:2}
console.log(o.toString()); // [object Object]


// after overridden
function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  
  console.log(dog1.toString());
  // expected output: "Gabby"