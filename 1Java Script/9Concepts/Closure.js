/*
Function bundled with its lexical environment is known as a closure. 
Whenever function is returned, 
even if its vanished in execution context but still it remembers the reference it was pointing to. 
Its not just that function alone it returns but the entire closure 
storing the value for future


run it in chrome to see closure
*/
z = 100
function outer(x){

    return function(y){
        // z = globalThis
        // x = closure outer
        // y = local this = globalThis
        console.log(globalThis)
        return x+y+z           
    }
}


// changing value
let add10 = outer(10)
console.log(add10(3)) // 113

add100 = outer(100)
console.log(add100(3)) // 203

console.log(add10(3)) // 113



console.log(``);
// including more parent function
console.log('including more parent function')

function parent1(a){
    function parent2(b){
        function child(c){
            // this line will have closure for all
            // a = closure parent1,
            // b = closure parent2,
            // c = local this = (globalThis)
            return a + b + c + 1 
        }
        return child
    }
    return parent2(100)
}

var addThousand = parent1(1000)         
console.log(addThousand(10));               // 1111
var addTenThousand = parent1(10000)     
console.log(addTenThousand(10))             // 10111
