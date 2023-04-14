/*
setTimeout is used to call a function after a certain time.

can be terminated inbetween by clearInterval

to create clearInterval create a reference to the setInterval and pass the reference as parameter to clearInterval


it just postpond the function execution, in the inbetween time other statements will be executed.
*/

function timeout() {
    count += 1
    console.log(count)
}
let count = 0
killtimeout = setTimeout(timeout, 2000)
console.log('coming after setTimeout but printed before setTimeout')
setTimeout(() => console.log(killtimeout), 3000)
/*
coming after setTimeout but printed before setTimeout
1
Timeout {
_idleTimeout: 2000,
_idlePrev: null,
_idleNext: null,
_idleStart: 49,
_onTimeout: [Function: timeout],
_timerArgs: undefined,
_repeat: null,
_destroyed: true,
[Symbol(refed)]: true,
[Symbol(kHasPrimitive)]: false,
[Symbol(asyncId)]: 2,
[Symbol(triggerId)]: 1
}
*/



// printing i value each time with one second gap
// steps: create a block scope with defined time for each block like 
// (1st block - 1sec, 2nd block - 2sec, 3rd block - 3sec, 4th block - 4sec, 5th block - 5sec) 

// using var will affect the values outside
function callFunction() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
    console.log('i will printed with one second gap')
}
callFunction()
/*
6
6
6
6
6
*/



// using let will create a block scope so i will be defined each time for each scope
function callFunction() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
    console.log('i will printed with one second gap')
}
callFunction()
/*
i will printed with one second gap
1
2
3
4
5
*/



console.log(``);
// without using let 
console.log(`without using let`);

function callFunction() {
    for (var i = 1; i <= 5; i++) {
        function inside(x) {
            setTimeout(() => console.log(x), i * 1000)
        }
        inside(i)
    }
    console.log('i will printed with one second gap')
}
callFunction()
/*
without using let
i will printed with one second gap
1
2
3
4
5
*/