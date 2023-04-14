/*
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions in JavaScript.
*/

function restParameter (a,b, ...para){
    console.log(a,b, para)
}

restParameter(1,2,3,4,5, {a:1,b:2})  // 1 2 [ 3, 4, 5, { a: 1, b: 2 } ]



console.log(``);
// usecase
console.log(`usecase`);

function multiply(multiplier, ...values){
    multipliedValue = values.map((x)=> x*multiplier)
    return (multipliedValue)
}
console.log(multiply(2,10,20,30))

/*
usecase
[ 20, 40, 60 ]
*/