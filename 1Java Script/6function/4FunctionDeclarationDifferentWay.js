/* 
There are 3 ways a function can be created
1. Function Declaration
2. Function Expression
3. Arrow Function
*/

// first way
function add(a,b){
    return a+b;
}

console.log(`First way result is ${add(20,10)}`)

// second way
sub = function(a,b){
    return a-b;
}
console.log(`First way result is ${sub(20,10)}`)

// third way - Arrow Function
mul = (a,b) =>{
    return a*b;
}
console.log(`First way result is ${mul(20,10)}`)
