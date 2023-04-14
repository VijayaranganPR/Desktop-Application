for(let i = 0; i<5; i++){
    console.count("loop iteration")     // it reaches the string "loop iteration" for 5 times
}
/*
loop iteration: 1
loop iteration: 2
loop iteration: 3
loop iteration: 4
loop iteration: 5
*/



function fun(){
    console.count('function call')
}
fun()
fun()
/*
function call: 1
function call: 2
*/
