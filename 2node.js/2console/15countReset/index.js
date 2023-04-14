for(let i = 0; i<5; i++){
    console.count("loop iteration")     // it reaches the string "loop iteration" for 5 times

    if(i === 2){
        console.countReset('loop iteration')
    }
}
/*
loop iteration: 1
loop iteration: 2
loop iteration: 3
loop iteration: 1
loop iteration: 2
*/



function fun(){
    console.count('function call')
}
fun()
console.countReset('function call')
fun()
/*
function call: 1
function call: 1
*/
