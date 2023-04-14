// when using setTimeout and setInterval to call a method, 
// 'this' inside the function will refer to the globalThis not that object.
// we can change that using A WRAPPER FUNCTION, Arrow FUNCTION, BIND().


const myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};



myArray.myMethod(); // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
myArray.myMethod(1); // one


// here this is refer to globalThis 
setTimeout(myArray.myMethod, 1*1000); // prints globalThis object after 1 second
setTimeout(myArray.myMethod, 2*1000, '1'); // undefined after 1.5 seconds



console.log(``);
// solution USE A WRAPPER FUNCTION

setTimeout(function(){myArray.myMethod()}, 3000)    // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
setTimeout(function(){myArray.myMethod(1)}, 4000)   // one

console.log(``);
// solution USE Arrow FUNCTION

setTimeout(()=>{myArray.myMethod()}, 5000)    // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
setTimeout(()=>{myArray.myMethod(1)}, 6000)   // one

console.log(``);
// solution USE BIND()

myNewFunction = (myArray.myMethod).bind(myArray)
myNewFunction()                 // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
myNewFunction(1)                // one

setTimeout(myNewFunction, 7000)    // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
setTimeout(myNewFunction, 8000, 1)   // one
