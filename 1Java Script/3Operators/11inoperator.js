// The in operator returns true if the specified property is in the specified object or its prototype chain.

// in objects
console.log(`in objects`);
console.log('a' in {a:1,b:2})  // true

// in herited property
a = {a:1, b:2}
b = {b:3, d:4}
b = Object.create(a)
console.log('a' in b)  // true


console.log(``);
// in array
console.log(`in array`);
console.log(0 in ['a', 'b', 'c', 'd'])  // true
console.log('length' in ['a', 'b', 'c', 'd'])  // true
console.log('a' in ['a', 'b', 'c', 'd'])  // false

empties = new Array(3);
console.log(empties[2]); // undefined
console.log(2 in empties); // false



console.log(``);
// in strings
console.log(`in strings`);
color1 = new String("green");
console.log('length' in color1); //  true


// error - can't use 'in' in string 
color = 'green'
// console.log('length' in color) // TypeError: Cannot use 'in' operator to search for 'length' in green