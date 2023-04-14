// in arrow function
console.log(`in arrow function`);
console.log(``);



console.log()
// arrow function don't use thisArg
// Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods. 
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError . 
// They also don't have access to the new.target keyword.
console.log(`arrow function don't use thisArg`);

x = () => this
o = {x:x}

console.log(o.x())

/* 
arrow function don't use thisArg
{}
 */
