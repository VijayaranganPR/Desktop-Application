// using catch will be help to do something that if any of the then or promise throw error or rejected.

const p = new Promise((resolve)=>{
    resolve(1)
})
function afterResolved(stage,value){
    console.log(stage + ': ' + 'then' + ' ' + value)
    if(stage === 'third'){                              // throwing error if stage is third
        throw '"Error occured in third then"'
    }
    return value +1
}
function afterRejected(stage,value){
    console.log(stage + ': ' + 'reason' + ' ' + value)
    return value + ' + ' +1
}
p.then((x) => afterResolved('first', x), (x) => afterRejected('first', x))
.then((x) => afterResolved('second', x), (x) => afterRejected('second', x))
.then((x) => afterResolved('third', x), (x) => afterRejected('third', x))
.then((x) => afterResolved('fourth', x), (x) => afterRejected('fourth', x))
.then((x) => afterResolved('fifth', x), (x) => afterRejected('fifth', x))
.catch((x) => console.log(`Error occured`))         // if there is any error occured in stage 5 this catch will executed

/*
first: then 1
second: then 2
third: then 3
fourth: reason "Error occured in third then"        // the value from third is "Error message for third"
fifth: then "Error occured in third then" + 1              
*/
