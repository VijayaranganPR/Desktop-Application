/*
using catch will be help to do something that if any of the then or promise throw error or rejected.

Handling a rejected promise in each .then() has consequences further down the promise chain. 
Sometimes there is no choice, because an error must be handled immediately. 

For faster execution, all synchronous actions should preferably be done within one handler, 
otherwise it would take several ticks to execute all handlers in sequence.
*/
const p = new Promise((resolve)=>{
    resolve(1)
})
function afterResolved(stage,value){
    console.log(stage + ' ' + 'then' + ' ' + value)
    if(stage === 'third'){
        throw 'Error message for third'
    }
    return value +1
}
p.then((x) => afterResolved('first', x))
.then((x) => afterResolved('second', x))
.then((x) => afterResolved('third', x))             // throw error in third
.then((x) => afterResolved('fourth', x))            // won't executed
.catch((x) => console.log(`Error occured`))

/*
first then 1
second then 2
third then 3
Error occured
*/
