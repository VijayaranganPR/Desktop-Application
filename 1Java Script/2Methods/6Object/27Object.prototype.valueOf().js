/**
 * returns a value representing the object
 * this need to be overridden 
 */

// before overriden
o = {a:1, b:2}
console.log(o.valueOf()); // { a: 1, b: 2 }

// after overridden

function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  console.log(object1 + 3);
  // expected output: 7