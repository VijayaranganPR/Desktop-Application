// evaluates the expression and return undefined no matter what

console.log(void(1)); // undefined

console.log(void(10>0))  // undefined

console.log(void(10<0))  // undefined

console.log(void('vijay'))  // undefined

console.log(void(null))  // undefined

console.log(void([]))  // undefined

console.log(void(Object()))  // undefined

console.log(void(NaN))  // undefined



console.log(``);
// we can use it to create a unnamed function to create a Immediately Invoked Function Expressions
console.log(`Immediately Invoked Function Expressions`);

void function(){
    console.log('Function executed')
}()
/*
Immediately Invoked Function Expressions
Function executed
*/