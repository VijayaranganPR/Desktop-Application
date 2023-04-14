// Function scope: The scope created with a function.
// inside inner scope we can redeclare values


const a = 1
let b = 2
var c = 3
let d = 4
function innerFunction(){
    const a = 10
    let b = 100
    var c = 1000

    d = 10000
    var e = 100000

    console.log(`a value is ${a}, b value is ${b}, c value is ${c}, d value is ${d}`)
}
innerFunction()  

console.log(`a value is ${a}`)  // a value is 1
console.log(`b value is ${b}`)  // b value is 2
console.log(`c value is ${c}`)  // c value is 3
console.log(`d value is ${d}`)  // d value is 10000
// console.log(`d value is ${e}`) // ReferenceError: d is not defined - no in scopre
    